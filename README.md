# My Website 3.0

这是一个基于 Next.js App Router 的个人站点，用来展示博客、游戏、音乐、图片和长期收藏内容。当前代码组织已经从单一内容文件升级为可分区维护的工程结构，更适合持续迭代和 agent 协作。

## Repo Map

- `app/page.js`: 首页装配层，保持 server component
- `app/game/page.js`: 游戏归档页
- `app/components/`: 页面组件与共享渲染单元
- `app/content/site.js`: 站点元信息
- `app/content/navigation.js`: 导航与社交链接
- `app/content/sections/*.js`: 各内容域数据
- `app/content/siteContent.js`: 聚合出口，兼容页面与脚本消费
- `app/content/presentation.js`: 展示规则
- `scripts/`: 内容、资源、结构守卫脚本

## Commands

```bash
npm run dev
npm run build
npm run check:content
npm run check:assets
npm run check:structure
npm run verify
```

## Content Editing

- 博客：`app/content/sections/blog.js`
- 游戏：`app/content/sections/game.js`
- 音乐：`app/content/sections/music.js`
- 图片：`app/content/sections/images.js`
- 收藏：`app/content/sections/favorites.js`
- 导航/社交：`app/content/navigation.js`
- 站点标题、域名、文案：`app/content/site.js`

## Release Flow

1. 修改对应内容模块或组件。
2. 运行 `npm run verify`。
3. 确认 `npm run build` 已通过。
4. 推送到 `main`，由 Vercel 自动部署。
