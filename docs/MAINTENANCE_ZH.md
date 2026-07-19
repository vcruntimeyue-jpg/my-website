# 维护手册

## 1）修改首屏定位与入口

打开 `app/content/hero.js`：

- `eyebrow`：首屏短标签
- `title`：页面唯一主标题
- `summary`：一句补充说明
- `primaryAction`：博客锚点入口
- `secondaryAction`：游戏归档入口

入口地址必须保持为已存在的站内锚点或路由，修改后运行 `npm run verify`。

## 2）更新音乐、图片、收藏的策展状态

打开 `app/content/sections/upcoming.js`，每个板块包含：

- `id`：固定使用 `music`、`images`、`favorites`
- `title`：板块标题
- `statusLabel`：当前状态
- `intro`：真实进度说明
- `topics`：计划整理的主题方向

未准备好真实清单时，不要用示例条目冒充个人收藏。

## 3）新增博客

1. 打开 `app/content/sections/blog.js`
2. 按现有对象新增 `title`、`date`、`summary`、`cover`、`url`、`category`、`tags`
3. 日期使用 `YYYY-MM-DD`
4. 外部链接使用 `https://`
5. 图片放入 `public/assets/blog`
6. 运行 `npm run verify`

## 4）新增或调整游戏

1. 打开 `app/content/sections/game.js`
2. 新增标题、简介、渐变色及可选封面
3. 封面放入 `public/assets/games`
4. 首页精选项设置 `featuredOnHome: true`
5. 所有精选项的 `featuredOrder` 必须从 1 连续排列且不重复
6. 运行 `npm run verify`

## 5）修改社交链接与导航

- 社交链接：`app/content/navigation.js` 的 `socialLinks`
- 导航：同文件的 `navLinks`
- 外部链接必须是 `https://`；邮箱可使用 `mailto:`
- 导航锚点只使用 `#home #blog #game #music #images #favorites #contact`

## 6）替换图片

- 博客：`public/assets/blog`
- 游戏：`public/assets/games`
- SEO：`public/assets/seo/og-image.png`

优先使用 WebP/AVIF 或经过压缩的 JPEG/PNG。替换后运行 `npm run check:assets` 和 `npm run build`。

## 7）发布前检查

```bash
npm ci
npm run verify
npm audit --audit-level=high
```

全部通过后再提交和推送。若 build 失败，先区分代码错误、进程权限或外部网络问题，再决定修复方式。
