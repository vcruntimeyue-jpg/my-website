# vcrunyue.com 生产就绪与完整体验优化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在不虚构个人内容、不重写既有品牌视觉的前提下，完成安全、工程门禁、首屏表达、移动导航、无障碍、SEO、统计与发布闭环。

**Architecture:** 保持 Next.js App Router 的 Server Component 优先策略；内容仍从 `app/content/**` 经 `siteContent` 聚合进入页面。仅 `AnalyticsBridge` 与 `RevealSection` 保持客户端入口，响应式行为与动效降级由 CSS 完成。

**Tech Stack:** Next.js 16.2.10、React 19、Tailwind CSS 4、Framer Motion、ESLint flat config、TypeScript checkJs、Node test runner、Playwright CLI、Vercel。

---

## 文件职责映射

- `app/content/hero.js`：首屏定位和 CTA 数据。
- `app/content/sections/upcoming.js`：音乐、图片、收藏的真实策展状态。
- `app/content/schema.js` / `siteContent.js`：公共数据类型与稳定聚合出口。
- `app/components/HeroSection.js`：响应式轨道 Hero 与首屏语义。
- `app/components/Navbar.js`：桌面/移动固定导航。
- `app/components/BlogSection.js` / `GameGallery.js`：内容卡片、无障碍复制项和响应式图片。
- `app/components/AnalyticsBridge.js`：路由级 page_view 与链接点击事件。
- `app/globals.css`：字体变量、Hero 几何、导航、焦点和 reduced-motion。
- `scripts/check-*.mjs`：内容、资源和结构契约。
- `tests/site-behavior.test.mjs`：纯数据、排序、进度和 sitemap 回归。
- `eslint.config.mjs` / `jsconfig.json` / `package.json`：工程门禁。

## Task 1：安全补丁、离线字体与质量工具

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `eslint.config.mjs`
- Modify: `jsconfig.json`
- Modify: `.gitignore`
- Modify: `app/layout.js`
- Modify: `app/globals.css`

- [ ] **Step 1：安装已核对的依赖**

```powershell
npm install next@16.2.10 @fontsource-variable/inter@5.2.8 @fontsource-variable/outfit@5.2.8
npm install -D eslint eslint-config-next@16.2.10 typescript@^5.9.3 @types/node @types/react @types/react-dom
```

预期：锁文件更新；`npm audit` 不再报告当前 Next.js 16.2.2 的 high 风险。

- [ ] **Step 2：先增加会失败的质量命令**

将脚本扩展为：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --project jsconfig.json --noEmit",
    "test": "node --test --test-isolation=none tests/site-behavior.test.mjs",
    "check:content": "node --no-warnings scripts/check-content.mjs",
    "check:assets": "node --no-warnings scripts/check-assets.mjs",
    "check:structure": "node --no-warnings scripts/check-structure.mjs",
    "verify": "npm run lint && npm run typecheck && npm run test && npm run check:content && npm run check:assets && npm run check:structure && npm run build"
  }
}
```

`package.json` 同时设置 `"type": "module"`，让 Node 测试直接加载内容层 ESM；`--test-isolation=none` 避免单文件测试创建额外子进程。

运行：`npm run lint`、`npm run typecheck`、`npm run test`。
预期：lint 因配置不存在失败；typecheck 暴露现有 JSDoc/props 类型问题；test 因测试文件不存在失败。

- [ ] **Step 3：配置 ESLint 与 checkJs**

`eslint.config.mjs` 使用 Next 16 文档中的 flat config：

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", ".playwright-cli/**", "output/**"]),
]);
```

`jsconfig.json` 固定 JavaScript 严格检查：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "checkJs": true,
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "jsx": "preserve",
    "incremental": true,
    "types": ["react", "react-dom"],
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["app/**/*.js"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4：替换构建期在线字体**

`app/layout.js` 删除 `next/font/google`，改为：

```js
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "./globals.css";
```

`<html>` 不再拼接 Google Font class；`globals.css` 定义：

```css
:root {
  --font-inter: "Inter Variable";
  --font-outfit: "Outfit Variable";
  --font-noto-sans-sc: "PingFang SC", "Microsoft YaHei";
}
```

运行：在无 Google Fonts 访问前提下执行 `npm run build`。
预期：不再出现 `fonts.googleapis.com` 请求错误。

- [ ] **Step 5：忽略本地浏览器工件**

`.gitignore` 增加：

```gitignore
# local browser verification
/.playwright-cli/
/output/
```

- [ ] **Step 6：阶段验证与提交**

```powershell
npm run lint
npm run typecheck
npm audit --audit-level=high
npm run build
git add package.json package-lock.json eslint.config.mjs jsconfig.json .gitignore app/layout.js app/globals.css
git commit -m "chore: harden build and quality tooling"
```

## Task 2：先测后建 Hero 与待上线内容模型

**Files:**
- Create: `tests/site-behavior.test.mjs`
- Create: `app/content/hero.js`
- Create: `app/content/sections/upcoming.js`
- Modify: `app/content/schema.js`
- Modify: `app/content/siteContent.js`
- Modify: `scripts/check-content.mjs`
- Modify: `scripts/check-structure.mjs`

- [ ] **Step 1：写失败测试**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { getFeaturedGames } from "../app/content/presentation.js";
import { calculateProgress } from "../app/content/progress.js";
import { siteContent } from "../app/content/siteContent.js";

test("hero actions and upcoming anchors are complete", () => {
  assert.equal(siteContent.hero.primaryAction.href, "#blog");
  assert.equal(siteContent.hero.secondaryAction.href, "/game");
  assert.deepEqual(siteContent.sections.upcoming.map((item) => item.id), ["music", "images", "favorites"]);
  assert.ok(siteContent.sections.upcoming.every((item) => item.topics.length > 0));
});

test("featured games are contiguous and progress calculation is deterministic", () => {
  assert.deepEqual(getFeaturedGames(siteContent.sections.game).map((item) => item.featuredOrder), [1,2,3,4,5,6,7,8,9]);
  assert.equal(calculateProgress([{ weight: 40, status: "done" }, { weight: 20, status: "partial" }]), 50);
});
```

运行：`npm run test`。
预期：因 `siteContent.hero` / `sections.upcoming` 不存在而失败。

- [ ] **Step 2：增加 HeroContent 与 UpcomingSection 类型**

在 `schema.js` 增加 `UPCOMING_SECTION_IDS`，并定义：

```js
/** @typedef {{label:string, href:string, track:string}} HeroAction */
/** @typedef {{eyebrow:string, title:string, summary:string, primaryAction:HeroAction, secondaryAction:HeroAction}} HeroContent */
/** @typedef {{id:"music"|"images"|"favorites", title:string, statusLabel:string, intro:string, topics:string[]}} UpcomingSection */
```

- [ ] **Step 3：实现内容模块**

`hero.js`：

```js
/** @type {import("./schema").HeroContent} */
export const hero = {
  eyebrow: "个人作品与长期兴趣",
  title: "在技术、创作与收藏之间，持续搭建自己的数字空间。",
  summary: "这里记录我的技术实践、游戏记忆，以及仍在生长的长期兴趣。",
  primaryAction: { label: "查看博客", href: "#blog", track: "hero:blog" },
  secondaryAction: { label: "浏览游戏", href: "/game", track: "hero:game" },
};
```

`sections/upcoming.js` 提供 `music/images/favorites` 三项，每项包含“策展中”、真实简介和主题方向数组；不创建具体收藏条目。

- [ ] **Step 4：聚合并验证新模型**

`siteContent.js` 导出 `hero`，并把 `upcomingSections` 放入 `sections.upcoming`。`check-content.mjs` 验证 action href、唯一 id、非空 topics；`check-structure.mjs` 期待 section key 顺序为 `blog,game,upcoming`。

运行：

```powershell
npm run test
npm run check:content
npm run check:structure
npm run typecheck
```

预期：全部通过。

- [ ] **Step 5：提交**

```powershell
git add tests app/content scripts/check-content.mjs scripts/check-structure.mjs
git commit -m "feat: model hero and upcoming sections"
```

## Task 3：首屏、移动导航与全局无障碍

**Files:**
- Modify: `app/layout.js`
- Modify: `app/page.js`
- Modify: `app/components/HeroSection.js`
- Modify: `app/components/Navbar.js`
- Modify: `app/globals.css`

- [ ] **Step 1：加入可验证的结构约束**

在 `check-structure.mjs` 增加源码断言：`app/page.js` 包含 `id="main-content"`、`HeroSection hero={siteContent.hero}` 与 `siteContent.sections.upcoming.map`；Hero 包含 `<h1`；Navbar 不得把主导航整体限制为 `hidden ... lg:flex`。

运行：`npm run check:structure`。
预期：失败并列出缺少的新结构。

- [ ] **Step 2：重构 Hero**

Hero 接收 `hero`，保留三层轨道与六个主题；中心静态内容结构固定为：

```jsx
<div className="hero-core">
  <div aria-hidden="true" className="hero-core-border" />
  <div className="hero-core-content">
    <p className="hero-eyebrow">{hero.eyebrow}</p>
    <h1>{hero.title}</h1>
    <p>{hero.summary}</p>
    <div className="hero-actions">
      <a href={hero.primaryAction.href} data-track={hero.primaryAction.track}>{hero.primaryAction.label}</a>
      <Link href={hero.secondaryAction.href} data-track={hero.secondaryAction.track}>{hero.secondaryAction.label}</Link>
    </div>
  </div>
</div>
```

轨道半径、图标尺寸、持续时间和静态角度通过 CSS 自定义属性传入；装饰容器标记 `aria-hidden="true"`。

- [ ] **Step 3：实现无需客户端状态的移动导航**

Navbar 使用语义 `<header>` 与 `aria-label="主导航"`。移动端采用两行布局：第一行站名与社交链接，第二行 `overflow-x:auto` 的锚点；桌面端恢复单行。每个导航项保留 `data-track`。

- [ ] **Step 4：加入 skip link 与主内容目标**

`layout.js` 在 body 首位增加：

```jsx
<a className="skip-link" href="#main-content">跳到主要内容</a>
```

`page.js` 的 `<main>` 使用 `id="main-content"`，Hero 接收内容数据。

- [ ] **Step 5：实现响应式和 reduced-motion CSS**

核心规则：

```css
.hero-stage { --hero-size: min(92vw, 76svh, 50rem); width: var(--hero-size); height: var(--hero-size); }
[id] { scroll-margin-top: 8.5rem; }
@media (min-width: 1024px) { [id] { scroll-margin-top: 6rem; } }
@media (prefers-reduced-motion: reduce) {
  .orbit-position, .orbit-badge, .hero-core-border, .animate-bounce { animation: none !important; }
}
```

运行：`npm run lint && npm run typecheck && npm run check:structure && npm run build`。
预期：全部通过。

- [ ] **Step 6：提交**

```powershell
git add app scripts/check-structure.mjs
git commit -m "feat: complete responsive hero and navigation"
```

## Task 4：内容状态、博客无障碍与游戏图片

**Files:**
- Modify: `app/page.js`
- Modify: `app/components/BlogSection.js`
- Modify: `app/components/GameGallery.js`
- Modify: `app/components/SocialLinks.js`
- Modify: `app/globals.css`
- Modify: `scripts/check-structure.mjs`

- [ ] **Step 1：先扩展结构检查**

断言 BlogSection 包含 `aria-hidden`、`isClone` 和 `scroller-clone`，且复制项不渲染交互链接；GameGallery 的 `sizes` 同时描述 1/2/3 列；页面使用 `upcoming.topics`。

运行：`npm run check:structure`。
预期：失败。

- [ ] **Step 2：渲染真实待上线状态**

在 `page.js` 直接 map `siteContent.sections.upcoming`，每项复用 `SectionShell`，展示 `statusLabel`、`intro` 与 `topics` 标签，不新建三个空壳组件。

- [ ] **Step 3：修复博客复制项语义并使用封面**

卡片接收 `isClone`：

```jsx
<li className={isClone ? "scroller-clone shrink-0" : "shrink-0"} aria-hidden={isClone || undefined}>
  <MarqueeBlogCard post={post} palette={palette} isClone={isClone} />
</li>
```

卡片内部使用 `next/image` 加载 `post.cover`，低透明度铺底并保留分类色遮罩；真实条目渲染链接，复制项仅渲染非交互内容容器，避免屏幕阅读器与程序化焦点接触重复链接。

- [ ] **Step 4：调整 reduced-motion 与图片 sizes**

减少动态效果时停止 scroller 动画并隐藏 `.scroller-clone`。游戏图像使用：

```jsx
sizes="(max-width: 767px) 96vw, (max-width: 1279px) 47vw, 31vw"
```

- [ ] **Step 5：修正邮件链接行为**

`SocialLinks` 仅对 `https://` 设置 `target="_blank"` 与 `rel="noopener noreferrer"`；`mailto:` 保持当前页协议处理。

- [ ] **Step 6：验证与提交**

```powershell
npm run lint
npm run typecheck
npm run test
npm run check:content
npm run check:assets
npm run check:structure
npm run build
git add app scripts/check-structure.mjs
git commit -m "feat: improve content states and accessibility"
```

## Task 5：SEO、路由统计与文档同步

**Files:**
- Modify: `app/components/AnalyticsBridge.js`
- Modify: `app/game/page.js`
- Modify: `app/sitemap.js`
- Modify: `tests/site-behavior.test.mjs`
- Modify: `README.md`
- Modify: `docs/MAINTENANCE_ZH.md`
- Modify: `docs/DEPLOY_MONITORING_ZH.md`
- Modify: `docs/ROADMAP_PROGRESS.md`

- [ ] **Step 1：写 sitemap 失败测试**

```js
import sitemap from "../app/sitemap.js";

test("sitemap exposes home and game archive", () => {
  assert.deepEqual(sitemap().map((entry) => entry.url), ["https://vcrunyue.com", "https://vcrunyue.com/game"]);
});
```

运行：`npm run test`。
预期：当前 sitemap 只有首页，测试失败。

- [ ] **Step 2：补齐 SEO**

`app/sitemap.js` 返回首页与 `${domain}/game`。游戏页 metadata 增加：

```js
alternates: { canonical: "/game" },
openGraph: {
  type: "website",
  url: "/game",
  title: "Vcrunyue Game",
  description: "完整收录 VCRUNYUE 达成全成就的游戏清单。",
  images: ["/assets/seo/og-image.png"],
}
```

- [ ] **Step 3：修复客户端路由统计**

```js
import { usePathname } from "next/navigation";

const pathname = usePathname();
useEffect(() => {
  trackEvent("page_view", { path: pathname, title: document.title });
}, [pathname]);
```

点击事件委托保留在独立、只运行一次的 effect 中。

- [ ] **Step 4：同步文档**

- README 增加技术栈、命令、结构、验证和部署入口。
- 维护手册增加 Hero/策展状态更新方式和完整 `verify`。
- 部署文档增加 audit、生产 URL、page_view/link_click 验证清单。
- 路线图在生产部署实际成功后把 P8 标记完成并更新总进度；部署前保持 partial。

- [ ] **Step 5：验证与提交**

```powershell
npm run verify
git add app tests README.md docs
git commit -m "feat: complete seo analytics and documentation"
```

## Task 6：浏览器回归、发布与生产验收

**Files:**
- Modify after successful deployment: `app/content/progress.js`
- Modify after successful deployment: `docs/ROADMAP_PROGRESS.md`

- [ ] **Step 1：全量本地门禁**

```powershell
npm ci
npm run verify
npm audit --audit-level=high
git status --short
```

预期：所有命令退出码 0；只有计划内文件发生改动。

- [ ] **Step 2：桌面浏览器回归**

启动 `npm run dev -- -p 3100`，用 Playwright 打开首页并检查：标题、唯一 H1、Hero 两个 CTA、五个主导航、所有板块、`/game` 跳转、返回首页、console error。

- [ ] **Step 3：移动端与 reduced-motion 回归**

浏览器调整为 390×844：确认导航可见/可横向浏览、无页面横向溢出、Hero 文字完整、游戏单列。模拟 `prefers-reduced-motion: reduce`：确认轨道、边框、bounce、marquee 停止。

- [ ] **Step 4：提交、推送**

```powershell
git status --short
git log --oneline -5
git push origin main
```

预期：`origin/main` 指向本轮最终提交，不使用 force push。

- [ ] **Step 5：Vercel 部署与 URL 检查**

使用已关联的 Vercel 项目触发部署或确认 Git push 自动部署；检查 `/`、`/game`、`/robots.txt`、`/sitemap.xml` 均返回 200，并记录部署 URL/状态。

- [ ] **Step 6：部署成功后闭合进度**

仅在生产部署和核心 URL 验证成功后，将 `P8` 改为 `done`，路线图更新为 100%，再次运行 `npm run verify`，提交并推送：

```powershell
git add app/content/progress.js docs/ROADMAP_PROGRESS.md
git commit -m "docs: mark production rollout complete"
git push origin main
```

## 计划自审结论

- 设计文档的产品、数据、架构、无障碍、SEO、统计、工程、发布要求均映射到 Task 1–6。
- 类型名统一为 `HeroAction`、`HeroContent`、`UpcomingSection`；聚合字段统一为 `siteContent.hero` 与 `siteContent.sections.upcoming`。
- 未安排 CMS、数据库、虚构收藏内容、整体 TypeScript 迁移或大型 UI 库。
- 每阶段都有失败验证、最小实现、全量检查和提交点；最终完成真实浏览器与生产 URL 验收。
