import SectionShell from "./SectionShell";

export default function ImagesSection() {
  return (
    <SectionShell
      id="images"
      title="图片"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          这里主要收藏我喜欢的壁纸、头像和高质量图片。它们不一定同一种风格，但都在视觉上打动过我。
        </p>
      }
    />
  );
}
