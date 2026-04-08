"use client";

import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const PLACEHOLDER_ITEMS = [
  {
    title: "城市风光",
    category: "摄影",
    palette: "from-slate-950 via-slate-700 to-amber-400",
  },
  {
    title: "自然景观",
    category: "自然",
    palette: "from-emerald-950 via-teal-700 to-cyan-300",
  },
  {
    title: "创意设计",
    category: "设计",
    palette: "from-fuchsia-950 via-rose-600 to-orange-300",
  },
  {
    title: "街头摄影",
    category: "街拍",
    palette: "from-zinc-950 via-zinc-700 to-stone-300",
  },
  {
    title: "科技产品",
    category: "科技",
    palette: "from-sky-950 via-blue-700 to-cyan-300",
  },
  {
    title: "旅行见闻",
    category: "旅行",
    palette: "from-orange-950 via-orange-600 to-yellow-200",
  },
];

function PlaceholderCard({ item }) {
  return (
    <div className="relative h-[240px] w-[200px] overflow-hidden rounded-[30px] border border-white/20 bg-slate-900/90 text-white shadow-[0_30px_70px_-35px_rgba(15,23,42,0.9)] sm:h-[280px] sm:w-[220px]">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.palette}`} />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 36%, rgba(255,255,255,0) 100%), repeating-linear-gradient(135deg, rgba(255,255,255,0.14) 0 1px, transparent 1px 24px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-6 top-8 h-24 w-24 rounded-full bg-white/20 blur-2xl"
      />
      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] tracking-[0.24em] text-white/80">
            {item.category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.34em] text-white/45">Placeholder</span>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-2.5 w-14 rounded-full bg-white/30" />
            <div className="h-2.5 w-20 rounded-full bg-white/15" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/78">正式图片之后替换，当前先保留构图和空间层次。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThreeDPhotoCarousel({ items = PLACEHOLDER_ITEMS }) {
  const rotation = useMotionValue(0);
  const smoothedRotation = useSpring(rotation, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });
  const dragState = useRef({
    isDragging: false,
    startX: 0,
    startRotation: 0,
  });
  const [isPaused, setIsPaused] = useState(false);

  useAnimationFrame((_, delta) => {
    if (isPaused || dragState.current.isDragging) {
      return;
    }

    rotation.set(rotation.get() + delta * 0.008);
  });

  const handlePointerDown = (event) => {
    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startRotation: rotation.get(),
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.isDragging) {
      return;
    }

    const offset = event.clientX - dragState.current.startX;
    rotation.set(dragState.current.startRotation + offset * 0.22);
  };

  const handlePointerUp = (event) => {
    dragState.current.isDragging = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const step = 360 / items.length;
  const radius = 320;

  return (
    <div className="relative mx-auto flex min-h-[480px] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.12),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.15),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(241,245,249,0.98))] px-2 py-6 sm:px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[14%] bottom-12 h-16 rounded-full bg-slate-900/12 blur-3xl"
      />

      <div
        className="relative h-[420px] w-full touch-pan-y select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ perspective: "1600px" }}
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/70 bg-white/40 blur-xl"
        />

        <div
          className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(-10deg)" }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{ rotateY: smoothedRotation, transformStyle: "preserve-3d" }}
          >
            {items.map((item, index) => (
              <div
                key={item.title}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${index * step}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <PlaceholderCard item={item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
