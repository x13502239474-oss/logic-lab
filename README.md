# LOGIC LAB · 逻辑学研究所

以《逻辑学导论》（第 15 版，柯匹 / 科恩 / 罗迪奇）为骨架的移动端逻辑学自学系统。
六个阶段、72 课、360 道习题、七个可交互的逻辑工具、18 条谬误图鉴、16 个现实论证案例。

## 快速开始

```bash
npm install
npm run dev      # 本地开发，默认 http://localhost:5173
npm run build    # 产物输出到 dist/
npm run preview  # 预览构建结果
```

Node 版本 ≥ 18。

## 部署

### GitHub Pages

1. 把整个项目推到仓库。
2. 仓库 Settings → Pages → Source 选 **GitHub Actions**。
3. 推送到 `main` 后，仓库自带的 `.github/workflows/deploy.yml` 会自动构建并发布。
4. 访问 `https://<用户名>.github.io/<仓库名>/`。

`vite.config.ts` 里 `base: './'`，路由用 HashRouter，因此放在任何子路径下都能直接打开，不需要额外配置。

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
│  ├─ lessons/s1..s6.ts 72 课正文与题库
│  ├─ cases.ts          16 个现实论证案例
│  ├─ fallacies.ts      18 条谬误
│  ├─ daily.ts          每日挑战、快速推理、拆解、侦探、写作题
│  └─ graph.ts          知识图谱节点与依赖
├─ lab/                 实验室七个工具
├─ pages/               首页 / 课程 / 课程详情 / 实验室 / 错题本 / 我的 / 训练 / 案例 / 图谱 / 谬误
├─ store/db.ts          LocalStorage 数据层（进度、答题、错题、笔记、档案、时长）
└─ styles/global.css    设计系统
```

## 课程与教材对应

| 阶段 | 主题 | 教材 |
|---|---|---|
| 一 | 逻辑学基础 | 第 1–2 章（1.1–2.4） |
| 二 | 语言与定义 | 第 3 章（3.1–3.6） |
| 三 | 命题逻辑 | 第 8–9 章（8.1–9.12） |
| 四 | 谓词逻辑与直言三段论 | 第 5–7 章、第 10 章 |
| 五 | 归纳、类比与因果 | 第 11–14 章 |
| 六 | 谬误与批判性思维 | 第 4 章（4.1–4.6） |

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
