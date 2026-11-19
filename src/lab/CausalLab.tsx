import { useState } from 'react'

type Kind = 'direct' | 'reverse' | 'common' | 'none'

interface CS {
  id: string
  title: string
  a: string
  b: string
  c?: string
  text: string
  answer: Kind
  explain: string
  hint: string
}

const CASES: CS[] = [
  {
    id: 'c1',
    title: '冰淇淋与溺水',
    a: '冰淇淋销量',
    b: '溺水人数',
    c: '气温',
    text: '某地统计显示：冰淇淋销量越高的月份，溺水人数也越多。有人据此建议限制冰淇淋销售以减少溺水。',
    answer: 'common',
    explain: '两者都由「气温」驱动：天热吃冰淇淋多，天热游泳的人也多。限制冰淇淋不会减少溺水。这是共同原因（混杂因素）的典型例子。',
    hint: '找一找，有没有第三个变量同时影响两者？',
  },
  {
    id: 'c2',
    title: '程序员与代码量',
    a: '程序员人数',
    b: '代码提交量',
    text: '某公司发现，团队人数增加的月份，代码提交量也增加，于是认为「多招人必然提高产出」。',
    answer: 'direct',
    explain: '这里确实存在直接因果：更多人写代码，提交量自然上升。但要注意，「代码量」不等于「有效产出」——这个指标本身是否衡量价值，是另一个问题。',
    hint: '这个关系有明确的机制吗？',
  },
  {
    id: 'c3',
    title: '房价与租金',
    a: '房价',
    b: '租金',
    text: '某城市房价上涨的同时租金也在上涨，有分析称「房价上涨推高了租金」。',
    answer: 'common',
    explain: '更常见的解释是人口流入与收入增长同时推高了房价与租金。若要支持原说法，需要证明房价上涨独立于需求因素。',
    hint: '除了 A 推 B，还有没有可能是 B 推 A，或者两者都由 C 推动？',
  },
  {
    id: 'c4',
    title: '医院与死亡率',
    a: '病情严重程度',
    b: '死亡概率',
    text: '统计发现，某医院收治病人越多，死亡人数越多，有人据此认为「这家医院水平差」。',
    answer: 'common',
    explain: '重症患者更可能被送到大医院，病情严重程度同时影响「是否被收治」与「是否死亡」。这正是混杂变量造成的假象，也叫入院率偏倚。',
    hint: '谁被送进这家医院？这个筛选过程本身会不会影响结果？',
  },
  {
    id: 'c5',
    title: '咖啡与长寿',
    a: '喝咖啡',
    b: '寿命',
    c: '收入与医疗条件',
    text: '一项观察性研究发现，经常喝咖啡的人平均寿命更长。',
    answer: 'common',
    explain: '收入较高、医疗条件较好的人群更可能经常消费咖啡，而这些因素本身影响寿命。观察性研究能确立相关，要确立因果还需随机对照试验或更强的自然实验。',
    hint: '喝咖啡的人群和整体人群，在其他方面一样吗？',
  },
  {
    id: 'c6',
    title: '摄像头与犯罪率',
    a: '摄像头数量',
    b: '报案犯罪率',
    text: '某区安装大量监控后，记录的犯罪率下降，官方称监控有效遏制了犯罪。',
    answer: 'none',
    explain: '这里至少三种可能同时存在：监控确实有威慑作用；部分犯罪转移到别的区域；以及「记录」本身变化——有些案件改由线下调解，不再进入统计。仅凭时间先后不能定论。',
    hint: '注意结论用的是「记录的犯罪率」，记录方式变了会怎样？',
  },
]

const KIND_LABEL: Record<Kind, string> = {
  direct: '直接因果：A → B',
  reverse: '反向因果：B → A',
  common: '共同原因：C → A 且 C → B',
  none: '不足以断定因果',
}

export default function CausalLab() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<Kind | null>(null)
  const cs = CASES[i]

  return (
    <div>
      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {CASES.map((c, k) => (
          <button key={c.id} className={`chip ${k === i ? 'on' : ''}`} onClick={() => { setI(k); setPick(null) }}>
            {k + 1}
          </button>
        ))}
      </div>

      <span className="eyebrow">Causal Analysis · 案例 {i + 1}</span>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 10 }}>{cs.title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.85, color: 'var(--graphite)' }}>{cs.text}</p>

      <div className="row" style={{ gap: 10, margin: '16px 0', alignItems: 'center', justifyContent: 'center' }}>
        <span className="chip">{cs.a}</span>
        <span style={{ color: 'var(--graphite-2)' }}>?</span>
        <span className="chip">{cs.b}</span>
      </div>

      <div className="q-stem" style={{ marginBottom: 10 }}>你认为这两个变量之间是什么关系？</div>
      {(Object.keys(KIND_LABEL) as Kind[]).map(k => {
        const answered = pick !== null
        const cls = answered ? (k === cs.answer ? 'opt right' : k === pick ? 'opt wrong' : 'opt') : 'opt'
        return (
          <button key={k} className={cls} onClick={() => !answered && setPick(k)}>
            <span className="k">·</span>
            <span>{KIND_LABEL[k]}</span>
          </button>
        )
      })}

      {pick && (
        <div className="fade-in" style={{ marginTop: 14 }}>
          <div className={`verdict-band ${pick === cs.answer ? 'ok' : 'bad'}`}>
            <span className="t">{pick === cs.answer ? '判断正确' : `正确答案：${KIND_LABEL[cs.answer]}`}</span>
            {cs.explain}
          </div>

          <div className="section-label"><span>因果图</span><i /></div>
          <Diagram kind={cs.answer} a={cs.a} b={cs.b} c={cs.c ?? '第三变量'} />
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 6 }}>
            实线箭头表示「影响」，虚线表示「仅观察到相关」。图中画的是这个案例的正确解释结构。
          </p>

          <div className="note" style={{ marginTop: 14 }}>
            <span className="note-h">思考提示</span>{cs.hint}
          </div>

          <button className="btn sm" style={{ marginTop: 16 }} onClick={() => { setI((i + 1) % CASES.length); setPick(null) }}>
            下一个案例
          </button>
        </div>
      )}
    </div>
  )
}

function Diagram({ kind, a, b, c }: { kind: Kind; a: string; b: string; c: string }) {
  const W = 340, H = 150
  const AR = { x: 58, y: 92 }, BR = { x: 282, y: 92 }, CR = { x: 170, y: 32 }
  const label = (x: number, y: number, t: string, w = 96) => (
    <g>
      <rect x={x - w / 2} y={y - 15} width={w} height={30} rx={1} fill="var(--paper-2)" stroke="var(--ink)" strokeWidth={0.9} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="var(--ink)" fontFamily="var(--font-ui)">
        {t.length > 7 ? t.slice(0, 7) + '…' : t}
      </text>
    </g>
  )
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 380, display: 'block', margin: '0 auto' }}>
      <defs>
        <marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="var(--ink)" />
        </marker>
      </defs>

      {kind === 'direct' && (
        <>
          <line x1={AR.x + 50} y1={AR.y} x2={BR.x - 52} y2={BR.y} stroke="var(--ink)" strokeWidth="1.1" markerEnd="url(#ah)" />
          {label(AR.x, AR.y, a)}
          {label(BR.x, BR.y, b)}
        </>
      )}
      {kind === 'reverse' && (
        <>
          <line x1={BR.x - 52} y1={BR.y} x2={AR.x + 50} y2={AR.y} stroke="var(--ink)" strokeWidth="1.1" markerEnd="url(#ah)" />
          {label(AR.x, AR.y, a)}
          {label(BR.x, BR.y, b)}
        </>
      )}
      {kind === 'common' && (
        <>
          {label(CR.x, CR.y, c, 118)}
          <path d={`M${CR.x - 40} ${CR.y + 15} L${AR.x + 10} ${AR.y - 16}`} stroke="var(--ink)" strokeWidth="1.1" markerEnd="url(#ah)" fill="none" />
          <path d={`M${CR.x + 40} ${CR.y + 15} L${BR.x - 10} ${BR.y - 16}`} stroke="var(--ink)" strokeWidth="1.1" markerEnd="url(#ah)" fill="none" />
          {label(AR.x, AR.y, a)}
          {label(BR.x, BR.y, b)}
        </>
      )}
      {kind === 'none' && (
        <>
          <line x1={AR.x + 50} y1={AR.y} x2={BR.x - 52} y2={BR.y} stroke="var(--graphite-2)" strokeWidth="1.1" strokeDasharray="5 4" />
          {label(AR.x, AR.y, a)}
          {label(BR.x, BR.y, b)}
          <text x={W / 2} y={AR.y - 26} textAnchor="middle" fontSize="10" fill="var(--graphite-2)" letterSpacing="1">
            相关 ≠ 因果
          </text>
        </>
      )}
    </svg>
  )
}
