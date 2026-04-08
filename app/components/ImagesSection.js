import SectionShell from "./SectionShell";
import ThreeDPhotoCarousel from "./ui/three-d-carousel";

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
    >
      <div className="w-full">
        <div className="min-h-[500px] rounded-[32px] border border-dashed border-orange-200/80 bg-white/60 p-2 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.32)] backdrop-blur-sm sm:p-4">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </SectionShell>
  );
}
