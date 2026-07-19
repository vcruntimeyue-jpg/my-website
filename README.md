# vcrunyue.com

Vcrunyue 的个人数字主页，记录技术实践、游戏记忆，以及持续整理中的音乐、图片与长期收藏。

线上地址：[vcrunyue.com](https://vcrunyue.com)

## 主要体验

- 响应式轨道 Hero，快速说明站点内容并提供博客、游戏入口
- 分类博客跑马灯，支持键盘聚焦与减少动态效果偏好
- 首页精选游戏与 `/game` 完整归档
- 音乐、图片、收藏的真实策展状态，不使用虚构条目
- SEO、sitemap、robots 与多平台统计事件桥接

## 技术栈

- Next.js 16 App Router / React 19
- Tailwind CSS 4 / Framer Motion
- 本地打包的 Inter Variable / Outfit Variable 字体
- ESLint / TypeScript checkJs / Node test runner
- Vercel 部署

## 本地运行

```bash
npm ci
npm run dev
```

访问 `http://localhost:3000`。

## 质量命令

```bash
npm run lint            # React、Next.js 与无障碍规则
npm run typecheck       # 严格检查 app/** JavaScript
npm run test            # 数据、排序、进度与 sitemap 回归
npm run check:content   # 内容字段与领域规则
npm run check:assets    # 本地资源引用
npm run check:structure # 组件边界与页面接线
npm run build           # 生产构建
npm run verify          # 提交前完整门禁
```

## 项目结构

```text
app/
  components/          UI 与交互组件
  content/             站点、Hero、导航与板块数据
  game/                游戏归档路由
scripts/               内容、资源和结构检查
tests/                 行为回归测试
docs/                  需求设计、实施计划与维护部署文档
public/assets/         博客、游戏、SEO 与 UI 静态资源
```

内容维护请阅读 [`docs/MAINTENANCE_ZH.md`](docs/MAINTENANCE_ZH.md)，部署与监控请阅读 [`docs/DEPLOY_MONITORING_ZH.md`](docs/DEPLOY_MONITORING_ZH.md)。
