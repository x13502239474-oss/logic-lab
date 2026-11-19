import { useState } from 'react'

interface IQ { q: string; options: string[]; answer: number; why: string }
interface Scenario { id: string; title: string; source: string; observations: string[]; claim: string; questions: IQ[] }

const SCENARIOS: Scenario[] = [
  {
    id: 'i1',
    title: '三只白天鹅',
    source: '某个自然观察笔记',
    observations: [
      '在本地公园连续三年观察到的天鹅都是白色的',
      '查阅的旧图册里，欧洲天鹅也都是白色的',
      '所有见过天鹅的朋友都说天鹅是白的',
    ],
    claim: '所有天鹅都是白色的。',
    questions: [
      {
        q: '这个归纳的强度如何？',
        options: ['很强：样本很多', '弱：样本在物种与地域上高度同质', '无法评价', '完全无效，归纳都是错的'],
        answer: 1,
        why: '观察再多，如果都来自同一地区、同一物种，就无法覆盖「所有天鹅」。黑天鹅的存在正说明样本范围决定了结论边界。',
      },
      {
        q: '要让结论更可靠，最该补充的是什么？',
        options: ['再多观察一百只本地天鹅', '到不同大陆、不同物种中取样', '找更多朋友确认', '把结论改成「天鹅很好看」'],
        answer: 1,
        why: '归纳的强度取决于样本对总体的代表性，而不是单纯的数量。扩大取样范围比重复同质样本更有价值。',
      },
      {
        q: '如果真发现了黑天鹅，原结论应该怎么处理？',
        options: ['结论被彻底推翻，说明归纳毫无价值', '修正为「大多数天鹅是白色的」，并限定范围', '忽略这个反例', '说明那只不是天鹅'],
        answer: 1,
        why: '单个反例推翻的是全称命题，不是归纳方法本身。合理的做法是降低强度、限定范围，这正是科学修正的方式。',
      },
    ],
  },
  {
    id: 'i2',
    title: '用户调研',
    source: '某 App 的站内问卷',
    observations: [
      '回收问卷 3200 份，其中 91% 给出四星以上评价',
      '问卷入口放在「帮助与反馈」页面',
      '填写者可参与抽奖',
    ],
    claim: '本 App 的用户满意度为 91%。',
    questions: [
      {
        q: '这个结论最大的问题是：',
        options: ['样本量太小', '抽样方式有偏：只有主动访问反馈页的人才可能填答', '91% 这个数字算错了', '没有问题'],
        answer: 1,
        why: '3200 份不算少，但样本不是从全体用户中随机抽取的。满意的人更愿意填、想要抽奖的人更愿意填，都会系统性抬高结果。',
      },
      {
        q: '抽奖激励最可能带来什么影响？',
        options: ['提高代表性', '吸引与满意度无关的人填答，稀释结果', '让答案更真实', '没有影响'],
        answer: 1,
        why: '为奖品而来的人可能随手打分，也可能为了中奖而给出好评。激励改变了「谁愿意回答」这个最关键的因素。',
      },
      {
        q: '要得到更可信的结论，可行做法是：',
        options: ['把问卷入口放到更显眼的位置', '随机抽样并追踪未回复者', '提高奖品金额', '只统计五星评价'],
        answer: 1,
        why: '概率抽样 + 对未回复者的追踪，是处理无应答偏差的标准做法。仅改变入口位置仍无法解决自选择问题。',
      },
    ],
  },
  {
    id: 'i3',
    title: '两家门店',
    source: '某连锁零售的内部汇报',
    observations: [
      'A 店更换了新陈列方案后，月销售增长 18%',
      '同期 B 店未更换方案，销售增长 16%',
      '两店所在商圈同期都有地铁新站开通',
    ],
    claim: '新陈列方案带来了 18% 的销售增长。',
    questions: [
      {
        q: '这里缺少的关键信息是：',
        options: ['A 店店长姓名', '没有对照的净效应：A 店相对 B 店只多增长了 2%', '陈列的颜色', '顾客年龄'],
        answer: 1,
        why: 'A 店的增长包含商圈利好等共同因素。用 B 店作对照，方案本身的净效应约为 2 个百分点，而不是 18%。',
      },
      {
        q: '这个推理最接近哪种方法？',
        options: ['求同法', '求异法（有对照组的差异比较）', '剩余法', '简单枚举'],
        answer: 1,
        why: '两店在其他方面尽量相似，唯一显著差异是陈列方案，这就是求异法的思路。但前提是「其他条件相同」真的成立。',
      },
      {
        q: '如果 A 店本来就在上升期，结论会怎样？',
        options: ['不受影响', '增长可能来自原有趋势，方案的作用被高估', '结论反而更强', '无法判断'],
        answer: 1,
        why: '原有趋势是一个混杂变量。要排除它，需要更长时间的前后对比，或使用同店同比而非环比。',
      },
    ],
  },
]

export default function InductionLab() {
  const [si, setSi] = useState(0)
  const [picks, setPicks] = useState<Record<number, number>>({})
  const sc = SCENARIOS[si]

  return (
    <div>
      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {SCENARIOS.map((s, i) => (
          <button key={s.id} className={`chip ${i === si ? 'on' : ''}`} onClick={() => { setSi(i); setPicks({}) }}>
            案例 {i + 1}
          </button>
        ))}
      </div>

      <span className="eyebrow">{sc.source}</span>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12 }}>{sc.title}</h3>

      <div className="panel" style={{ marginBottom: 14 }}>
        <span className="note-h" style={{ color: 'var(--graphite)' }}>观察到的证据</span>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.9 }}>
          {sc.observations.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </div>

      <div className="verdict-band" style={{ borderLeftColor: 'var(--accent)' }}>
        <span className="t">由此得出的结论</span>
        {sc.claim}
      </div>

      <div style={{ marginTop: 20 }}>
        {sc.questions.map((q, qi) => {
          const pick = picks[qi]
          const answered = pick !== undefined
          return (
            <div key={qi} style={{ borderTop: '1px solid var(--rule)', padding: '16px 0' }}>
              <div className="row" style={{ gap: 8, marginBottom: 10 }}>
                <span className="q-num">{String(qi + 1).padStart(2, '0')}</span>
                <div style={{ fontSize: 14.5, fontWeight: 500, lineHeight: 1.7 }}>{q.q}</div>
              </div>
              {q.options.map((o, oi) => {
                const cls = answered
                  ? oi === q.answer ? 'opt right' : oi === pick ? 'opt wrong' : 'opt'
                  : 'opt'
                return (
                  <button key={oi} className={cls} onClick={() => !answered && setPicks({ ...picks, [qi]: oi })}>
                    <span className="k">{'ABCD'[oi]}</span>
                    <span>{o}</span>
                  </button>
                )
              })}
              {answered && (
                <div className="answer-box" style={{ marginTop: 8 }}>
                  <span className={`verdict ${pick === q.answer ? 'ok' : 'bad'}`}>
                    {pick === q.answer ? '✓ 正确' : '✗ 再想想'}
                  </span>
                  {q.why}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {Object.keys(picks).length === sc.questions.length && (
        <div className="note" style={{ marginTop: 8 }}>
          <span className="note-h">小结</span>
          归纳结论不是「对或错」，而是「有多强」。评价一个归纳，问三件事：样本对总体有代表性吗？有没有其他同样合理的解释？结论的强度是否超出了证据允许的范围？
        </div>
      )}
    </div>
  )
}
