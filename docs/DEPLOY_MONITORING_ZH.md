# 部署与监控说明

## 部署（Vercel）

1. 把仓库推送到 GitHub
2. 在 Vercel 导入项目
3. 构建命令：`npm run build`
4. 输出目录：默认 Next.js
5. 绑定自定义域名
6. 部署后访问：
   - 首页：`/`
   - 站点地图：`/sitemap.xml`
   - robots：`/robots.txt`

## 基础监控（已预埋）

项目内已有 `AnalyticsBridge`，会自动发送：

- `page_view`：页面访问
- `link_click`：点击带 `data-track` 的链接

当前会自动兼容以下对象（若页面已接入）：

- `window.va.track`（Vercel Analytics）
- `window.gtag`（GA4）
- `window.umami.track`
- `window.plausible`

## 你需要做的最后一步

在生产环境接入任一统计服务脚本，然后打开网站手动点击几个链接，确认后台有事件数据。
