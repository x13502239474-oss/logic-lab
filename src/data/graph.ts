export interface KGNode {
  id: string
  label: string
  stage: number
  lessonId: string
  desc: string
  pre: string[]
  post: string[]
  drills: string[]
}

export interface KGLayer {
  title: string
  note: string
  nodes: KGNode[]
}

export const KG_LAYERS: KGLayer[] = [
  {
    title: 'Ⅰ 起点：思维的单位',
    note: '一切论证都由「有真假的东西」构成。',
    nodes: [
      {
        id: 'concept', label: '概念', stage: 2, lessonId: 's2-04',
        desc: '概念的内涵决定对象是否属于它，外延是它所指的那一类对象。',
        pre: [], post: ['term', 'proposition'],
        drills: ['s2-05', 's2-09'],
      },
      {
        id: 'term', label: '词项', stage: 2, lessonId: 's2-03',
        desc: '论证里被反复使用的词。词义漂移是隐蔽的推理断裂。',
        pre: ['concept'], post: ['proposition'],
        drills: ['s2-08'],
      },
      {
        id: 'definition', label: '定义', stage: 2, lessonId: 's2-06',
        desc: '把词钉死在一个含义上的工具：属加种差、外延定义、操作定义。',
        pre: ['concept'], post: ['proposition'],
        drills: ['s2-07', 's2-08'],
      },
    ],
  },
  {
    title: 'Ⅱ 材料：命题',
    note: '只有能判真假的陈述，才能当前提或结论。',
    nodes: [
      {
        id: 'proposition', label: '命题', stage: 3, lessonId: 's3-02',
        desc: '一个有真假的陈述。命令、疑问、感叹不构成命题。',
        pre: ['concept'], post: ['compound', 'categorical', 'quantifier'],
        drills: ['s1-02'],
      },
      {
        id: 'compound', label: '复合命题', stage: 3, lessonId: 's3-03',
        desc: '由 ¬ ∧ ∨ → ↔ 把简单命题组合起来，整体真值由支命题真值决定。',
        pre: ['proposition'], post: ['truth-table'],
        drills: ['s3-04', 's3-08'],
      },
      {
        id: 'categorical', label: '直言命题', stage: 4, lessonId: 's4-01',
        desc: 'A / E / I / O 四种形式，用「所有」「有的」量化主项与谓项的关系。',
        pre: ['proposition'], post: ['distribution', 'syllogism'],
        drills: ['s4-02', 's4-03'],
      },
      {
        id: 'quantifier', label: '量词', stage: 4, lessonId: 's4-12',
        desc: '∀x 与 ∃x：把「所有」「有的」写成可运算的符号，处理命题内部结构。',
        pre: ['proposition'], post: ['quant-proof'],
        drills: ['s4-13', 's4-14'],
      },
    ],
  },
  {
    title: 'Ⅲ 结构：推理与论证',
    note: '从一个判断走到另一个判断，靠的是形式而不是语气。',
    nodes: [
      {
        id: 'argument', label: '论证', stage: 1, lessonId: 's1-02',
        desc: '前提 + 结论的语言单位。识别论证的第一步是找结论指示词。',
        pre: ['proposition'], post: ['deduction', 'induction', 'validity'],
        drills: ['s1-03', 's1-04', 's1-07'],
      },
      {
        id: 'deduction', label: '演绎', stage: 1, lessonId: 's1-05',
        desc: '前提声称给结论决定性支持：前提真则结论必然真。',
        pre: ['argument'], post: ['validity', 'prop-logic', 'syllogism'],
        drills: ['s1-06'],
      },
      {
        id: 'induction', label: '归纳', stage: 5, lessonId: 's5-01',
        desc: '结论超出前提，只能获得或然支持，强弱有程度。',
        pre: ['argument'], post: ['strength', 'analogy', 'causal', 'probability'],
        drills: ['s5-05'],
      },
      {
        id: 'validity', label: '有效性', stage: 1, lessonId: 's1-06',
        desc: '不可能前提真而结论假。与「结论是否真实」是两件事。',
        pre: ['deduction'], post: ['prop-logic', 'syllogism', 'soundness'],
        drills: ['s3-06'],
      },
      {
        id: 'soundness', label: '可靠性', stage: 1, lessonId: 's1-06',
        desc: '有效 + 全部前提为真。可靠论证的结论一定为真。',
        pre: ['validity'], post: [],
        drills: [],
      },
      {
        id: 'strength', label: '归纳强度', stage: 5, lessonId: 's5-01',
        desc: '前提为真时结论为真的概率高低。可通过反例、样本、机制来评价。',
        pre: ['induction'], post: ['probability'],
        drills: ['s5-12'],
      },
    ],
  },
  {
    title: 'Ⅳ 工具：形式系统',
    note: '把论证写成符号，就能机械地算出它是否有效。',
    nodes: [
      {
        id: 'prop-logic', label: '命题逻辑', stage: 3, lessonId: 's3-01',
        desc: '以整个命题为最小单位的逻辑系统，靠真值函项运算。',
        pre: ['validity', 'compound'], post: ['truth-table', 'natural-deduction'],
        drills: ['s3-05'],
      },
      {
        id: 'truth-table', label: '真值表', stage: 3, lessonId: 's3-07',
        desc: '$2^n$ 行穷举所有真值指派，找出是否存在前提真结论假的那一行。',
        pre: ['prop-logic'], post: ['equivalence', 'tautology'],
        drills: ['s3-06', 's3-13'],
      },
      {
        id: 'equivalence', label: '逻辑等价', stage: 3, lessonId: 's3-09',
        desc: '两式在所有指派下真值相同。德摩根、易位、蕴涵、分配等十条替换规则。',
        pre: ['truth-table'], post: ['natural-deduction'],
        drills: ['s3-10'],
      },
      {
        id: 'tautology', label: '重言式', stage: 3, lessonId: 's3-10',
        desc: '永真的公式。矛盾律与排中律都是重言式，同一律是推理的前提。',
        pre: ['truth-table'], post: [],
        drills: [],
      },
      {
        id: 'natural-deduction', label: '形式证明', stage: 3, lessonId: 's3-11',
        desc: '用九条推论规则与十条替换规则，从前提一步步推出结论。',
        pre: ['prop-logic', 'equivalence'], post: ['cp-ip'],
        drills: ['s3-12'],
      },
      {
        id: 'cp-ip', label: '条件证明与归谬', stage: 3, lessonId: 's3-14',
        desc: '先假定，再推出，最后解除假定。处理条件结论与否定结论的常用武器。',
        pre: ['natural-deduction'], post: [],
        drills: ['s3-13'],
      },
      {
        id: 'syllogism', label: '三段论', stage: 4, lessonId: 's4-06',
        desc: '大前提、小前提、结论，三个词项，四个格，十五个有效形式。',
        pre: ['categorical', 'validity'], post: ['distribution', 'venn'],
        drills: ['s4-07', 's4-08', 's4-09'],
      },
      {
        id: 'distribution', label: '周延性', stage: 4, lessonId: 's4-02',
        desc: '一个词项是否被断定了全部外延。三段论规则的核心判据。',
        pre: ['categorical'], post: ['syllogism'],
        drills: ['s4-07'],
      },
      {
        id: 'venn', label: '文恩图', stage: 4, lessonId: 's4-05',
        desc: '用圆、阴影与 × 表示类的包含与存在，直观检查三段论。',
        pre: ['syllogism'], post: [],
        drills: ['s4-08'],
      },
      {
        id: 'quant-proof', label: '量化证明', stage: 4, lessonId: 's4-13',
        desc: 'UI / UG / EI / EG 四条量词规则，以及它们的使用限制。',
        pre: ['quantifier'], post: [],
        drills: ['s4-14'],
      },
    ],
  },
  {
    title: 'Ⅴ 扩展：不确定世界里的推理',
    note: '大多数真实判断没有必然性，只有强度。',
    nodes: [
      {
        id: 'analogy', label: '类比', stage: 5, lessonId: 's5-02',
        desc: '相似点越相关、反相似点越少，结论越可靠。',
        pre: ['induction'], post: [],
        drills: ['s5-03'],
      },
      {
        id: 'causal', label: '因果', stage: 5, lessonId: 's5-04',
        desc: '求同、求异、并用法、共变、剩余——密尔五法及其失效条件。',
        pre: ['induction'], post: ['hypothesis'],
        drills: ['s5-06', 's5-07'],
      },
      {
        id: 'probability', label: '概率', stage: 5, lessonId: 's5-10',
        desc: '古典、频率、主观三种解释；加法与乘法规则；基础比率。',
        pre: ['strength'], post: ['hypothesis'],
        drills: ['s5-11', 's5-12'],
      },
      {
        id: 'hypothesis', label: '假说与确证', stage: 5, lessonId: 's5-08',
        desc: '假说-演绎法：从假说推出可检验预言，再与观察对照。',
        pre: ['causal', 'probability'], post: [],
        drills: ['s5-09'],
      },
    ],
  },
  {
    title: 'Ⅵ 反面：谬误',
    note: '每一条谬误，都是前面某个工具被悄悄绕过的地方。',
    nodes: [
      {
        id: 'fallacy', label: '谬误', stage: 6, lessonId: 's6-01',
        desc: '看似有效实则无效的论证。分相干、不当归纳、预设、含混四类。',
        pre: ['argument'], post: ['relevance', 'inductive-fallacy', 'presumption', 'ambiguity'],
        drills: ['s6-02'],
      },
      {
        id: 'relevance', label: '相干谬误', stage: 6, lessonId: 's6-02',
        desc: '理由与结论无关：人身攻击、稻草人、滑坡、虚假两难、诉诸权威与大众。',
        pre: ['fallacy'], post: [],
        drills: ['s6-03', 's6-04', 's6-05', 's6-06', 's6-07'],
      },
      {
        id: 'inductive-fallacy', label: '不当归纳', stage: 6, lessonId: 's6-09',
        desc: '样本不足、类比不当、无视反例、混淆相关与因果。',
        pre: ['fallacy'], post: [],
        drills: ['s6-10', 's6-11', 's6-12'],
      },
      {
        id: 'presumption', label: '预设谬误', stage: 6, lessonId: 's6-08',
        desc: '把要证明的东西塞进前提：循环论证、复杂问句、虚假原因。',
        pre: ['fallacy'], post: [],
        drills: ['s6-08'],
      },
      {
        id: 'ambiguity', label: '含混谬误', stage: 6, lessonId: 's6-13',
        desc: '词义在中途变形：歧义、合成、分割。',
        pre: ['fallacy'], post: [],
        drills: ['s6-13'],
      },
    ],
  },
]

export const KG_NODES = KG_LAYERS.flatMap(l => l.nodes)

export const kgById = (id: string) => KG_NODES.find(n => n.id === id)

export function relatedNodes(id: string): { node: KGNode; relation: '前置' | '后续' }[] {
  const n = kgById(id)
  if (!n) return []
  const out: { node: KGNode; relation: '前置' | '后续' }[] = []
  n.pre.forEach(p => { const x = kgById(p); if (x) out.push({ node: x, relation: '前置' }) })
  n.post.forEach(p => { const x = kgById(p); if (x) out.push({ node: x, relation: '后续' }) })
  return out
}
