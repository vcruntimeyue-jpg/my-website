# 维护手册（小白版）

## 1) 改一篇博客

1. 打开 `app/content/siteContent.js`
2. 找到 `sections.blog`
3. 按现有格式新增一条对象：
   - `title`：标题
   - `date`：日期（例如 `2026-04-04`）
   - `summary`：简介
   - `cover`：封面图路径（如 `/assets/blog/xxx.webp`）
   - `url`：文章外链（必须 `https://`）
   - `tags`：标签数组
4. 运行 `npm run verify`

## 2) 换图片

1. 把图片放进对应目录：
   - 博客：`public/assets/blog`
   - 游戏：`public/assets/games`
   - 音乐：`public/assets/music`
   - 图片：`public/assets/images`
   - 收藏：`public/assets/favorites/books` 或 `movies`
2. 回到 `app/content/siteContent.js`，把 `cover` 或 `image` 改成新路径
3. 运行 `npm run verify`

## 3) 改社交链接

1. 打开 `app/content/siteContent.js`
2. 找到 `socialLinks`
3. 改 `url`，必须是 `https://...`
4. 运行 `npm run check:content`

## 4) 改导航栏文字顺序

1. 打开 `app/content/siteContent.js`
2. 修改 `navLinks`
3. 仅使用这些锚点：`#home #blog #game #music #images #favorites #contact`
4. 运行 `npm run verify`

## 5) 发布前检查

按顺序执行：

```bash
npm run check:content
npm run build
```

两个都通过再上线。
