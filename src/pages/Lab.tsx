import { useState } from 'react'
import TruthTableLab from '../lab/TruthTableLab'
import SyllogismLab from '../lab/SyllogismLab'
import ArgumentLab from '../lab/ArgumentLab'
import FallacyLab from '../lab/FallacyLab'
import InductionLab from '../lab/InductionLab'
import CausalLab from '../lab/CausalLab'
import ProofLab from '../lab/ProofLab'

const TABS = [
  { id: 'tt', label: '真值表', el: <TruthTableLab /> },
  { id: 'syl', label: '三段论', el: <SyllogismLab /> },
  { id: 'arg', label: '论证拆解', el: <ArgumentLab /> },
  { id: 'fal', label: '谬误识别', el: <FallacyLab /> },
  { id: 'ind', label: '归纳训练', el: <InductionLab /> },
  { id: 'cau', label: '因果分析', el: <CausalLab /> },
  { id: 'prf', label: '逻辑证明', el: <ProofLab /> },
]

export default function Lab() {
  const [tab, setTab] = useState('tt')
  const cur = TABS.find(t => t.id === tab)!

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18, paddingBottom: 14 }}>
        <span className="eyebrow">The Laboratory</span>
        <h1 style={{ fontSize: 25 }}>逻辑实验室</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          七个可以真正动手的工具。算出来的结果比背下来的规则更牢。
        </p>
      </div>

      <div className="tabs">
        {TABS.map(t => (
          <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      <div style={{ paddingTop: 18 }}>{cur.el}</div>
    </div>
  )
}
