"use client";

import RevealSection from "./RevealSection";

const CARD_VARIANTS = [
  {
    bgClass: "bg-green-800",
  },
  {
    bgClass: "bg-pink-800",
  },
  {
    bgClass: "bg-indigo-800",
  },
  {
    bgClass: "bg-blue-800",
  },
  {
    bgClass: "bg-purple-700",
  },
  {
    bgClass: "bg-teal-800",
  },
];

const CATEGORY_COLORS = {
  AI: "bg-sky-500",
  Web3: "bg-rose-700",
  网络基础: "bg-blue-800",
  电脑装机: "bg-teal-800",
  运动健身: "bg-green-800",
  营养补剂: "bg-red-700",
};

function getCategoryColor(category, fallbackIndex) {
  if (category && CATEGORY_COLORS[category]) {
    return CATEGORY_COLORS[category];
  }

  return CARD_VARIANTS[fallbackIndex % CARD_VARIANTS.length].bgClass;
}

function formatDate(input) {
  return new Date(input).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function ensureMinItems(row, fallback, minCount = 6) {
  if (!fallback.length) {
    return [];
  }

  const source = row.length > 0 ? row : fallback;
  const result = [...row];
  let pointer = 0;

  while (result.length < minCount) {
    result.push(source[pointer % source.length]);
    pointer += 1;
  }

  return result;
}

function splitRows(posts = []) {
  const rowOne = posts.filter((_, index) => index % 3 === 0);
  const rowTwo = posts.filter((_, index) => index % 3 === 1);
  const rowThree = posts.filter((_, index) => index % 3 === 2);

  return {
    rowOne: ensureMinItems(rowOne, posts, 5),
    rowTwo: ensureMinItems(rowTwo, posts, 5),
    rowThree: ensureMinItems(rowThree, posts, 5),
  };
}

function MarqueeBlogCard({ post, palette }) {
  return (
    <article className={`h-full w-[350px] max-w-full relative rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-3 ${palette.bgClass}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
        style={{ backgroundImage: "url(/assets/ui/noise.webp)", backgroundSize: "30%" }}
      />
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        data-track={`blog:${post.title}`}
        className="relative block h-full"
      >
        <div className="flex text-white gap-2 items-center justify-between">
          <p className="text-lg font-bold truncate pr-3">{post.category}</p>
          <time className="text-sm text-gray-200">{formatDate(post.date)}</time>
        </div>
        <h3 className="text-2xl font-semibold text-white leading-tight line-clamp-2 mt-3">{post.title}</h3>
        <p className="text-sm text-gray-200 leading-6 line-clamp-3 mt-2">{post.summary}</p>
      </a>
    </article>
  );
}

function MarqueeRow({ rowPosts, direction, rowIndex }) {
  const duplicated = [...rowPosts, ...rowPosts];
  const directionClass = direction === "right" ? "scroller-track-right" : "scroller-track-left";

  return (
    <div
      className="scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
      aria-label="博客滚动列表"
    >
      <ul className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap hover:[animation-play-state:paused] ${directionClass}`}>
        {duplicated.map((post, index) => {
          const palette = {
            bgClass: getCategoryColor(post.category, index + rowIndex),
          };

          return (
            <li key={`${post.title}-${rowIndex}-${index}`} className="shrink-0">
              <MarqueeBlogCard post={post} palette={palette} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function BlogSection({ posts }) {
  const { rowOne, rowTwo, rowThree } = splitRows(posts);

  return (
    <RevealSection id="blog" className="w-full px-4 lg:px-16 xl:px-32 2xl:px-44 relative z-10 my-24 lg:my-32">
      <div className="w-full">
        <div className="mb-12 lg:mb-16 flex flex-col gap-4">
          <h2 className="text-orange-400 text-5xl xl:text-6xl font-semibold">博客</h2>
          <p className="text-xl text-slate-600 max-w-4xl mt-2">
            记录我的思考、学习和创作过程，包含AI、Web3、网络基础、电脑装机、运动健身、营养补剂等等
          </p>
        </div>

        <div className="grid gap-4 mt-4">
          <MarqueeRow rowPosts={rowOne} direction="right" rowIndex={0} />
          <MarqueeRow rowPosts={rowTwo} direction="left" rowIndex={1} />
          <MarqueeRow rowPosts={rowThree} direction="right" rowIndex={2} />
        </div>
      </div>
    </RevealSection>
  );
}
