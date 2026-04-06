# My Website Agent Workflow (Token-Saving)

把下面模板作为新窗口第一条消息直接发送给 AI。

```text
使用固定流程：
- 仅改 /Users/vcrunyue/Documents/Antigravity/my-website_副本
- 改完必须 npm run build
- 然后 git add/commit/git push 到 origin main
- 禁用 git reset --hard / git checkout --
- 发现意外改动先暂停问我
- 回复仅给：改动文件、build结果、commit hash、push结果

本次需求：<在这里写需求>
```

## 极简版（更省 token）

```text
仅改 my-website_副本；完成后 build + commit + push(main)；
禁用 destructive git；有意外改动先停并询问。
回复只要：files/build/hash/push。
需求：<你的需求>
```

## 说明
- 仓库：`git@github.com:vcrunyue/my-website.git`
- 分支：`main`
- 部署：`main` 推送后 Vercel 自动部署
