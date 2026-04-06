/** @type {import("./schema").ProgressPhase[]} */
export const progress = [
  { id: "P0", name: "基线冻结", weight: 5, status: "done" },
  { id: "P1", name: "内容盘点", weight: 10, status: "done" },
  { id: "P2", name: "内容模型化", weight: 10, status: "done" },
  { id: "P3", name: "模块内容落地", weight: 20, status: "done" },
  { id: "P4", name: "资源素材落地", weight: 10, status: "done" },
  { id: "P5", name: "响应式与可访问性", weight: 10, status: "done" },
  { id: "P6", name: "性能与SEO", weight: 10, status: "done" },
  { id: "P7", name: "全链路验收", weight: 10, status: "done" },
  { id: "P8", name: "发布与监控", weight: 10, status: "partial" },
  { id: "P9", name: "文档与交接", weight: 5, status: "done" },
];

export function calculateProgress(progressPhases) {
  return progressPhases.reduce((sum, phase) => {
    const rate = phase.status === "done" ? 1 : phase.status === "partial" ? 0.5 : 0;
    return sum + phase.weight * rate;
  }, 0);
}
