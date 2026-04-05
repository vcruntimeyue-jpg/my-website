# My Website 3.0

这是我的个人网站，用来展示我的基本介绍、近期博客、作品与兴趣内容。你可以在这里了解我正在做什么、关注什么，也能看到一些我想分享的内容。

当前代码已经完成：

- 数据驱动内容管理（统一内容入口）
- 首页模块真实内容替换（无占位文本、无空链接）
- 资源目录化（`public/assets`）
- SEO 基础配置（metadata / sitemap / robots）
- 内容质量检查脚本（`npm run check:content`）

## 快速开始

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 预览。

## 常用命令

```bash
npm run dev            # 本地开发
npm run check:content  # 检查占位文本、链接规范、锚点规范
npm run build          # 生产构建
npm run verify         # 内容检查 + 构建
```

## 内容怎么改（只改一个文件）

统一在：

`app/content/siteContent.js`

你可以修改：

- 站点标题/描述：`site`
- 顶部导航：`navLinks`
- 社媒链接：`socialLinks`
- 五大模块内容：`sections.blog / game / music / images / favorites`
- 阶段进度：`progress`

组件只负责渲染，内容不再写死在组件中。

## 设计约束

以下视觉结构默认锁定不改（仅允许无障碍/性能微调）：

- 导航栏：`app/components/Navbar.js`
- 首屏轨道系统：`app/components/HeroSection.js`
- 首屏底部 Scroll 提示：`app/components/HeroSection.js`

## 目录说明

- `app/content/siteContent.js`：网站全部内容数据
- `app/components/`：页面组件
- `public/assets/`：图片素材（已按模块分目录）
- `scripts/check-content.mjs`：内容与链接质量检查
- `docs/`：维护说明与进度说明
