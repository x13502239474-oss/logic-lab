# LOGIC LAB · 逻辑学研究所

以《逻辑学导论》（第 15 版，柯匹 / 科恩 / 罗迪奇）为骨架的移动端逻辑学自学系统。
七个阶段、84 课、420 道习题、正文约 22 万字、七个可交互的逻辑工具、18 条谬误图鉴、16 个现实论证案例。

每课按统一结构编写：背景与意义 → 核心定义 → 理论讲解 → 例题与分析 → 反例训练 → 现实应用 → 本节总结，配 5 道练习与四段式解析。

## 快速开始

```bash
npm install
npm run dev      # 本地开发，默认 http://localhost:5173
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建结果
```

Node 版本 ≥ 18。

## 部署

线上地址：<https://x13502239474-oss.github.io/logic-lab/>

采用「main 源码 + GitHub Actions 自动构建」：

- `main`：源码（不含 `dist/`），每次提交自动触发构建
- `.github/workflows/deploy.yml` 负责 `npm ci → npm run build → 发布 Pages`（Pages 的 `build_type` 为 `workflow`）

日常更新只需提交源码，构建交给 Actions。

本机若无法直连 github.com（企业代理、校园网常见），用 REST 接口提交源码：

```bash
GITHUB_TOKEN=<令牌> python deploy/push_source.py "提交说明"
# 只提交部分文件时，后面追加路径参数
GITHUB_TOKEN=<令牌> python deploy/push_source.py "提交说明" README.md src/data/lessons/s7.ts
```

脚本走 Git Data API（blobs → tree → commit → 更新 ref），只需 `repo` 权限；提交后自动触发 Actions。

备用发布方式（不依赖 Actions，直接推产物分支）：

```bash
GH_TOKEN=<令牌> python deploy/publish_ghpages.py
```

脚本把 `dist/` 逐文件上传为 `gh-pages` 上的新提交。

`vite.config.ts` 里 `base: './'`，路由用 HashRouter，因此放在任何子路径下都能直接打开。

### 其他静态托管

`npm run build` 后把 `dist/` 整个目录上传即可（Vercel / Netlify / Nginx 都适用）。纯静态，无后端依赖。

## 目录结构

```
src/
├─ lib/logic/           逻辑引擎（全部有单元测试）
│  ├─ prop.ts           命题解析、求值、真值表、等值、蕴涵
│  ├─ syllogism.ts      直言命题解析、格与式、有效性判定与谬误诊断
│  └─ nd.ts             自然演绎：九条推论规则、十条替换规则、CP / IP
├─ data/
│  ├─ curriculum.ts     阶段与课程聚合、题目索引
│  ├─ lessons/s1..s7.ts 84 课正文与题库（s7 为批判性思维阶段，自主编排）
│  ├─ cases.ts          16 个现实论证案例
│  ├─ fallacies.ts      18 条谬误
│  ├─ daily.ts          每日挑战、快速推理、拆解、侦探、写作题
│  └─ graph.ts          知识图谱节点与依赖
├─ components/           Markdown 渲染器、Figures 内联 SVG 图块、题目卡片
├─ lab/                 实验室七个工具
├─ pages/               首页 / 课程 / 课程详情 / 实验室 / 错题本 / 我的 / 训练 / 案例 / 图谱 / 谬误
├─ store/db.ts          LocalStorage 数据层（进度、答题、错题、笔记、档案、时长）
└─ styles/global.css    设计系统
```

## 课程结构规范

每课固定七节，顺序不可调换：

1. **背景与意义**——这个概念为什么会出现、解决了什么问题
2. **核心定义**——专业定义 + 通俗解释 + 关键术语
3. **理论讲解**——机制、形式结构、可照做的步骤
4. **例题与分析**——由易到难，含正误对比图块
5. **反例训练**——有缺陷的版本 + 错在哪里
6. **现实应用**——真实场景里的用法
7. **本节总结**——要点回扣

每课配 5 道练习（单选 / 多选 / 判断 / 简答），解析统一四段式：答案 → 解题思路 → 逐步演示 → 易错提醒。

正文支持四种内联 SVG 图块，零外部依赖：

| 语法 | 用途 |
|---|---|
| `:::tree` | 论证树，结论在上、前提在下 |
| `:::flow` | 推理流程图，编号步骤 + 箭头 |
| `:::graph` | 概念关系图，节点 + 关系边 |
| `:::versus` | 正误对比卡，行首 `+` / `-` 标注对错 |

`:::versus neutral` 用于并列分类（如演绎 vs 归纳），两侧按中性样式渲染，不暗示好坏。

### 校验脚本

```bash
npx tsx scripts/logic.test.ts    # 逻辑引擎 38 项
npx tsx scripts/figures.test.ts  # 图块解析 20 项
npx tsx scripts/validate.ts      # 课程结构、题库合法性
npx tsx scripts/crosscheck.ts    # 跨文件引用有效性
npx tsx scripts/standards.ts     # 九条教学标准覆盖审计（--detail 看逐课缺口）
```

`standards.ts` 按九项标准逐课打分：定义、背景与意义、形式结构、示例≥2、正误对比、常见误区、练习≥5、每题解析、可视化图块。

## 课程与教材对应

| 阶段 | 主题 | 教材 |
|---|---|---|
| 一 | 逻辑学基础 | 第 1–2 章（1.1–2.4） |
| 二 | 语言与定义 | 第 3 章（3.1–3.6） |
| 三 | 命题逻辑 | 第 8–9 章（8.1–9.12） |
| 四 | 谓词逻辑与直言三段论 | 第 5–7 章、第 10 章 |
| 五 | 归纳、类比与因果 | 第 11–14 章 |
| 六 | 谬误与批判性思维 | 第 4 章（4.1–4.6） |
| 七 | 批判性思维 | 自主编排（CT-1 至 CT-12），方法素材取自第 1、2、4 章 |

教材原书把三段论置于命题逻辑之前。本课程把命题逻辑提前，是为了让学习者先掌握「论证形式」这一核心视角；课程页已注明可调换顺序。

讲解文字全部重新撰写，未复制教材原文，不引用具体页码。涉及现实情境的案例使用虚构主体，不对任何真实个人或机构作评价。

## 数据存储

全部数据保存在浏览器 `localStorage`（键名 `logiclab.db.v1`）：

- 课程进度、每课访问与完成时间
- 每道题的最新作答与对错
- 错题（错误次数、上次答错时间、已掌握、收藏）
- 笔记、收藏课程、个人论证档案
- 每日任务完成状态、每日挑战作答
- 每日学习时长（页面可见时每 20 秒累加）

「我的」页可导出完整 JSON 备份。清空浏览器数据会丢失记录，请先导出。

预留云端同步：`store/db.ts` 的读写全部集中在 `commit()` 与 `load()`，接入远端只需替换这两个函数，页面层无需改动。

## 准确性保障

- 逻辑引擎有 38 项单元测试：`npx esbuild scripts/logic.test.ts --bundle --format=esm --platform=node --outfile=scripts/.tmp.mjs && node scripts/.tmp.mjs`
- 内容完整性检查：`npx esbuild scripts/validate.ts --bundle --format=esm --platform=node --outfile=scripts/.val.mjs && node scripts/.val.mjs`
  校验每课 6 个小节、5 道题、答案格式、题号唯一、公式 `$` 配平。
- 交叉引用检查：`scripts/crosscheck.ts` 验证案例、谬误、图谱指向的课程 id 全部存在。
- 文风抽查：`scripts/audit.ts` 统计题型分布、单选答案分布与简答要点覆盖率。
- 选项位置已在数据层归一化（`src/lib/quizOrder.ts`）：解析中提到选项字母的题保持原序，其余确定性重排，避免「答案总在 B」。
- 交叉引用检查：`scripts/crosscheck.ts` 验证案例、谬误、图谱指向的课程 id 全部存在。
- 文风抽查：`scripts/audit.ts` 统计题型分布、单选答案分布与简答要点覆盖率。
- 选项位置已在数据层归一化（`src/lib/quizOrder.ts`）：解析中提到选项字母的题保持原序，其余确定性重排，避免「答案总在 B」。
- 三段论判定采用现代（布尔）解释，故为 15 个有效形式；AAI-3、EAO-3、AAI-4、EAO-4 等弱化式标注为「传统解释下有效」。

## 浏览器支持

iOS Safari / Chrome / Edge 最新两个大版本。移动端优先设计，底部固定导航，适配 iPhone 安全区；平板与桌面端版心最宽 760px。
