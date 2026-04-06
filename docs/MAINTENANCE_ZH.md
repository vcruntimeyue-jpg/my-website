# 维护手册（小白版）

## 1) 改一篇博客

1. 打开 `app/content/sections/blog.js`
2. 找到 `blogPosts`
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
2. 回到对应模块，把 `cover` 或 `image` 改成新路径：
   - 博客：`app/content/sections/blog.js`
   - 游戏：`app/content/sections/game.js`
3. 运行 `npm run verify`

## 3) 改社交链接

1. 打开 `app/content/navigation.js`
2. 找到 `socialLinks`
3. 改 `url`，必须是 `https://...`
4. 运行 `npm run verify`

## 4) 改导航栏文字顺序

1. 打开 `app/content/navigation.js`
2. 修改 `navLinks`
3. 仅使用这些锚点：`#home #blog #game #music #images #favorites #contact`
4. 运行 `npm run verify`

## 5) 发布前检查

按顺序执行：

```bash
npm run check:content
npm run check:assets
npm run check:structure
npm run build
```

更省事的方式：

```bash
npm run verify
```

全部通过再上线。
