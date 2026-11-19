#!/usr/bin/env python3
"""
通过 GitHub REST Git Data API 提交源码变更到 main。
用于代理阻断 git push 的环境。

用法：
  GITHUB_TOKEN=xxx python deploy/push_source.py "提交说明" file1 file2 ...
路径相对仓库根目录。不传文件则使用默认清单。
"""
import base64
import json
import os
import sys
import urllib.request

TOKEN = os.environ.get('GITHUB_TOKEN', '')
REPO = os.environ.get('GITHUB_REPO', 'x13502239474-oss/logic-lab')
API = 'https://api.github.com'

DEFAULT_FILES = [
    'README.md',
    'src/components/Markdown.tsx',
    'src/components/Figures.tsx',
    'src/data/curriculum.ts',
    'src/data/graph.ts',
    'src/data/lessons/s1.ts',
    'src/data/lessons/s2.ts',
    'src/data/lessons/s3.ts',
    'src/data/lessons/s4.ts',
    'src/data/lessons/s5.ts',
    'src/data/lessons/s6.ts',
    'src/data/lessons/s7.ts',
    'src/pages/Courses.tsx',
    'src/styles/global.css',
    'scripts/figures.test.ts',
    'scripts/validate.ts',
    'scripts/standards.ts',
    'deploy/push_source.py',
    'deploy/publish_ghpages.py',
]


def req(method, path, data=None, timeout=90):
    url = API + path
    body = json.dumps(data).encode('utf-8') if data is not None else None
    r = urllib.request.Request(url, data=body, method=method)
    r.add_header('Authorization', 'Bearer ' + TOKEN)
    r.add_header('Accept', 'application/vnd.github+json')
    r.add_header('User-Agent', 'logic-lab-deploy')
    if body is not None:
        r.add_header('Content-Type', 'application/json')
    with urllib.request.urlopen(r, timeout=timeout) as resp:
        raw = resp.read().decode('utf-8')
        return json.loads(raw) if raw else {}


def main():
    if not TOKEN:
        print('缺少 GITHUB_TOKEN')
        return 2

    message = sys.argv[1] if len(sys.argv) > 1 else 'update'
    files = sys.argv[2:] or DEFAULT_FILES

    ref = req('GET', f'/repos/{REPO}/git/ref/heads/main')
    base_sha = ref['object']['sha']
    base_tree = req('GET', f'/repos/{REPO}/git/commits/{base_sha}')['tree']['sha']
    print('base commit:', base_sha[:8])

    entries = []
    for path in files:
        if not os.path.isfile(path):
            print('  跳过（不存在）:', path)
            continue
        with open(path, 'rb') as f:
            content = f.read()
        blob = req('POST', f'/repos/{REPO}/git/blobs',
                   {'content': base64.b64encode(content).decode('ascii'), 'encoding': 'base64'})
        entries.append({'path': path.replace('\\', '/'), 'mode': '100644', 'type': 'blob', 'sha': blob['sha']})
        print(f"  blob {path} {len(content)}B -> {blob['sha'][:8]}")

    if not entries:
        print('没有可提交文件')
        return 1

    tree = req('POST', f'/repos/{REPO}/git/trees', {'base_tree': base_tree, 'tree': entries})
    commit = req('POST', f'/repos/{REPO}/git/commits',
                 {'message': message, 'tree': tree['sha'], 'parents': [base_sha]})
    req('PATCH', f'/repos/{REPO}/git/refs/heads/main', {'sha': commit['sha'], 'force': False})
    print('已提交:', commit['sha'])
    print('查看:', commit.get('html_url'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
