"use client";

const RINGS = [
  { radius: 221, opacity: 0.55, duration: 11, iconSize: 52 },
  { radius: 291, opacity: 0.30, duration: 15, iconSize: 60 },
  { radius: 365, opacity: 0.12, duration: 20, iconSize: 68 },
];

const ORBIT_ITEMS = [
  { ring: 1, delay: 0,    emoji: "⚡", label: "代码",  bg: "#1e293b" },
  { ring: 1, delay: -3.5, emoji: "🎮", label: "游戏",  bg: "#4c1d95" },
  { ring: 2, delay: 0,    emoji: "🎵", label: "音乐",  bg: "#0f766e" },
  { ring: 2, delay: -6.5, emoji: "📚", label: "书",    bg: "#92400e" },
  { ring: 3, delay: 0,    emoji: "✈️", label: "旅行",  bg: "#0369a1" },
  { ring: 3, delay: -10,  emoji: "🌐", label: "开源",  bg: "#166534" },
];

const CONTAINER = 800;
const CENTER_SIZE = 340;

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "60px",
      }}
    >
      {/* 轨道系统容器 */}
      <div
        style={{
          position: "relative",
          width: CONTAINER,
          height: CONTAINER,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transform: "translateY(-24px)",
        }}
      >
        {/* SVG 虚线轨道 */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {RINGS.map((ring, i) => (
            <circle
              key={i}
              cx="50%" cy="50%"
              r={ring.radius}
              fill="none"
              stroke="#334155"
              strokeWidth="1"
              strokeDasharray="5 5"
              strokeOpacity={ring.opacity}
            />
          ))}
        </svg>

        {/* 轨道图标 */}
        {ORBIT_ITEMS.map((item, i) => {
          const ring = RINGS[item.ring - 1];
          const anim = `${ring.duration}s linear ${item.delay}s infinite`;
          const sz = ring.iconSize;
          const half = sz / 2;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: 0, height: 0,
                animation: `orbitSpin ${anim}`,
              }}
            >
              <div style={{ position: "absolute", left: ring.radius }}>
                <div style={{ position: "absolute", top: -half, left: -half, animation: `orbitCounterSpin ${anim}` }}>
                  <div
                    title={item.label}
                    style={{
                      width: sz, height: sz,
                      fontSize: sz * 0.44,
                      background: item.bg,
                      border: "2px solid rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.emoji}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 中心圆 — 外层旋转描边，内层静止无文字 */}
        <div
          style={{
            position: "absolute",
            zIndex: 10,
            width: CENTER_SIZE + 12,
            height: CENTER_SIZE + 12,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #fb923c 0%, #fde68a 20%, #f97316 50%, #fbbf24 80%, #fb923c 100%)",
            padding: "8px 2px 5px 3px",
            animation: "borderSpin 10s linear infinite",
            boxShadow: "0 0 50px rgba(251,146,60,0.4), 0 0 100px rgba(251,146,60,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(241,245,249,0.98) 100%)",
              backdropFilter: "blur(10px)",
            }}
          />
        </div>
      </div>

      {/* Scroll 指示器 — 绝对定位在屏幕底部，保证立刻可见 */}
      <div
        className="animate-bounce"
        style={{
          position: "absolute",
          bottom: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          marginTop: "16px",
          cursor: "default",
          userSelect: "none",
        }}
      >
        <span style={{ color: "#94a3b8", fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <svg
          style={{ width: 16, height: 16, color: "#fb923c" }}
          fill="none"
          stroke="#fb923c"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
