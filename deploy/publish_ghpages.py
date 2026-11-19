import base64, json, os, subprocess, sys

TOKEN = os.environ['GH_TOKEN']
OWNER = 'x13502239474-oss'
REPO = 'logic-lab'
ROOT = os.environ.get('DEPLOY_DIR', r'C:\Users\1\AppData\Local\Temp\ghp')
API = 'https://api.github.com'

def call(path, method='GET', payload=None):
    args = ['curl', '-sS', '-X', method, f'{API}{path}',
            '-H', f'Authorization: Bearer {TOKEN}',
            '-H', 'Accept: application/vnd.github+json',
            '-H', 'Content-Type: application/json',
            '-H', 'User-Agent: logic-lab-deploy']
    if payload is not None:
        args += ['--data-binary', '@-']
    p = subprocess.run(args, input=json.dumps(payload) if payload is not None else None,
                       capture_output=True, text=True, encoding='utf-8')
    if p.returncode != 0:
        raise RuntimeError(f'curl failed: {p.stderr[:300]}')
    try:
        data = json.loads(p.stdout)
    except json.JSONDecodeError:
        raise RuntimeError(f'bad json: {p.stdout[:300]}')
    if isinstance(data, dict) and data.get('message') and 'sha' not in data:
        raise RuntimeError(f"API error on {path}: {data.get('message')}")
    return data

files = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d != '.git']
    for fn in filenames:
        full = os.path.join(dirpath, fn)
        files.append((os.path.relpath(full, ROOT).replace('\\', '/'), full))
files.sort()

print(f'{len(files)} files')
tree = []
for rel, full in files:
    with open(full, 'rb') as f:
        content = base64.b64encode(f.read()).decode()
    blob = call(f'/repos/{OWNER}/{REPO}/git/blobs', 'POST', {'content': content, 'encoding': 'base64'})
    tree.append({'path': rel, 'mode': '100644', 'type': 'blob', 'sha': blob['sha']})
    print('  ok', rel, flush=True)

t = call(f'/repos/{OWNER}/{REPO}/git/trees', 'POST', {'tree': tree})
print('tree', t['sha'])
c = call(f'/repos/{OWNER}/{REPO}/git/commits', 'POST', {
    'message': 'build: LOGIC LAB 站点产物（v1）',
    'tree': t['sha'],
    'parents': [],
})
print('commit', c['sha'])

existing = subprocess.run(['curl', '-sS', f'{API}/repos/{OWNER}/{REPO}/git/ref/heads/gh-pages',
                           '-H', f'Authorization: Bearer {TOKEN}', '-H', 'User-Agent: logic-lab-deploy'],
                          capture_output=True, text=True, encoding='utf-8').stdout
if 'refs/heads/gh-pages' in existing:
    call(f'/repos/{OWNER}/{REPO}/git/refs/heads/gh-pages', 'PATCH', {'sha': c['sha'], 'force': True})
    print('branch updated')
else:
    call(f'/repos/{OWNER}/{REPO}/git/refs', 'POST', {'ref': 'refs/heads/gh-pages', 'sha': c['sha']})
    print('branch created')

print('DONE', c['sha'])
