# CLAUDE.md

这是 vcrunyue.com 个人网站项目。基于 Next.js 16 App Router + React 19 + Tailwind CSS 4 + Framer Motion，部署在 Vercel。

## 常用命令

```bash
npm run dev          # 本地开发
npm run build        # 构建
npm run lint         # ESLint + Next.js Core Web Vitals
npm run typecheck    # app/** JavaScript 严格类型检查
npm run test         # Node 行为回归测试
npm run verify       # 提交前完整验证
npm run check:content   # 仅验证内容质量
npm run check:assets    # 仅验证静态资源引用
npm run check:structure # 仅验证项目结构
npm run start        # 生产模式启动
```

## 项目架构

### 页面路由
- `/` — 首页，组合所有 section 组件
- `/game` — 游戏归档子页面，独立路由和 metadata
- `/icon.svg`, `/robots.txt`, `/sitemap.xml` — 自动生成

### 组件结构
`app/components/` 下是 UI 组件库：
- **SectionShell** — 每个内容区块的通用外壳（含标题+介绍+Reveal 动画）
- **RevealSection** — Client Component，用 framer-motion 做滚动出现动画
- **Navbar** — 固定顶部导航 + 社交图标
- **HeroSection** — 首页响应式轨道、站点定位与行动入口
- **BlogSection** — 博客三行跑马灯（Marquee），按分类分组
- **GameSection** / **GameGallery** — 游戏卡片网格
- 音乐/图片/收藏仍是轻量策展状态，由 `page.js` 直接复用 `SectionShell`
- **SiteFooter** — 页脚
- **SocialLinks** / **SocialIcon** — 社交链接复用组件
- **AnalyticsBridge** — 统计埋点（兼容 Vercel Analytics / GA4 / Umami / Plausible）

### 内容层
所有内容数据集中在 `app/content/`：
- `site.js` — 站点元信息（名称、域名、tagline 等）
- `navigation.js` — 导航项 + 社交链接
- `schema.js` — JSDoc 类型定义（SiteMeta, BlogPost, GameEntry 等）
- `presentation.js` — 展示规则（博客分类颜色、精选游戏排序）
- `siteContent.js` — 聚合出口
- `sections/blog.js` — 博客数据
- `sections/game.js` — 游戏数据
- `sections/upcoming.js` — 音乐、图片、收藏的策展状态
- `hero.js` — Hero 定位与行动入口
- `progress.js` — V2→V3 重构进度量化

### 验证脚本
`scripts/` 下三个验证关卡，发布前需要全部通过：
- `check-content.mjs` — 内容质量
- `check-assets.mjs` — 资源引用
- `check-structure.mjs` — 项目结构

## 开发约定
- 内容改动只在 `app/content/` 下操作
- 展示规则写入 `app/content/presentation.js`，不要分散到 UI 组件
- 新增 UI 组件前先在 `app/components/` 里找是否有可复用的（如 SectionShell）
- 链接必须用 `https://`
- 本地资源放 `public/` 下
- 博客日期格式 `YYYY-MM-DD`
- 如需新增 section 级别的规则，同时更新验证脚本和 `presentation.js`

## 发布流程
```bash
npm run verify              # 完整门禁
npm audit --audit-level=high
git push                    # 推送到 main → Vercel 自动部署
```
