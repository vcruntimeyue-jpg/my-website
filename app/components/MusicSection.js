import SectionShell from "./SectionShell";

export default function MusicSection() {
  return (
    <SectionShell
      id="music"
      title="音乐"
      intro={
        <p className="mb-8 text-xl text-slate-600">
          这里整理了我长期收藏和反复循环的歌单与单曲。不同风格的音乐，构成了我日常最稳定的情绪背景。
        </p>
      }
    />
  );
}
