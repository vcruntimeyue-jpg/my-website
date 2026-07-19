# 部署与监控说明

## 1）发布前门禁

```bash
npm ci
npm run verify
npm audit --audit-level=high
```

要求：lint、typecheck、行为测试、内容/资源/结构检查和生产构建全部通过；依赖不存在 high/critical 风险。

字体资源由 npm 锁文件安装并随构建打包，生产构建不需要访问 Google Fonts。

## 2）Vercel 部署

1. GitHub 仓库与 Vercel 项目保持关联
2. 构建命令使用 `npm run build`
3. 输出目录使用 Next.js 默认值
4. 推送 `main` 后检查部署状态和构建日志
5. 保持自定义域名 `vcrunyue.com` 绑定

部署后逐项访问：

- `/`
- `/game`
- `/robots.txt`
- `/sitemap.xml`

四个 URL 均应返回 200，sitemap 应包含首页和游戏归档。

## 3）统计事件

`AnalyticsBridge` 会发送：

- `page_view`：首次加载及 App Router pathname 变化
- `link_click`：点击带 `data-track` 的链接

兼容对象：

- `window.va.track`（Vercel Analytics）
- `window.gtag`（GA4）
- `window.umami.track`
- `window.plausible`

生产环境只需选择并接入其中一种主统计服务。验证流程：

1. 打开首页，确认收到 `/` 的 `page_view`
2. 点击“浏览游戏”，确认收到 `/game` 的 `page_view`
3. 点击 Hero、导航或社交链接，确认收到 `link_click`
4. payload 只应包含 `path/title` 或 `track/href/text`

## 4）部署故障定位顺序

1. 检查 `npm ci` 与 Node 版本
2. 检查 lint/typecheck/test 的首个失败项
3. 检查内容、资源和结构门禁
4. 检查 Next.js build 日志与 worker 权限
5. 检查 Vercel 项目授权、环境变量与域名状态

不要使用 `npm audit fix --force` 或反复改代码来掩盖未定位的根因。
