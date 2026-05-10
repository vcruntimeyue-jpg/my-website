import { blogCategoryOrder, getBlogCategoryStyle } from "../content/presentation";
import SectionShell from "./SectionShell";

function formatDate(input) {
  return new Date(input).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

const ROW_COUNT = 3;
const MIN_ITEMS_PER_ROW = 4;

function splitRows(posts = []) {
  // Group posts by category
  const byCategory = new Map();
  for (const post of posts) {
    const list = byCategory.get(post.category) || [];
    list.push(post);
    byCategory.set(post.category, list);
  }

  // Distribute across rows: each category's posts start in a different row
  const rows = Array.from({ length: ROW_COUNT }, () => []);
  blogCategoryOrder.forEach((category, categoryIndex) => {
    const categoryPosts = byCategory.get(category) || [];
    categoryPosts.forEach((post, postIndex) => {
      rows[(categoryIndex + postIndex) % ROW_COUNT].push(post);
    });
  });

  // Any uncategorized posts go to rows round-robin
  let leftoverIndex = 0;
  for (const post of posts) {
    if (!blogCategoryOrder.includes(post.category)) {
      rows[leftoverIndex % ROW_COUNT].push(post);
      leftoverIndex += 1;
    }
  }

  // Fill short rows by repeating from the first populated row's content
  const fillSource = rows.find((r) => r.length > 0) || [];
  for (let i = 0; i < ROW_COUNT; i++) {
    while (rows[i].length < MIN_ITEMS_PER_ROW && fillSource.length > 0) {
      rows[i].push(fillSource[rows[i].length % fillSource.length]);
    }
  }

  return { rowOne: rows[0], rowTwo: rows[1], rowThree: rows[2] };
}

function MarqueeBlogCard({ post, palette }) {
  return (
    <article
      className="h-full w-[350px] max-w-full relative rounded-2xl border border-b-0 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-3"
      style={{ backgroundColor: palette.backgroundColor, borderColor: palette.borderColor }}
    >
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

function MarqueeRow({ rowPosts, direction, rowIndex, phaseClass }) {
  const duplicated = [...rowPosts, ...rowPosts];
  const directionClass = direction === "right" ? "scroller-track-right" : "scroller-track-left";

  return (
    <div className="scroller scroller-soft-mask relative z-20 overflow-hidden" aria-label="博客滚动列表">
      <ul className={`scroller-track flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap ${directionClass} ${phaseClass}`}>
        {duplicated.map((post, index) => {
          const palette = getBlogCategoryStyle(post.category, index + rowIndex);

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
    <SectionShell
      id="blog"
      title="博客"
      intro={
        <p className="mt-2 max-w-4xl text-xl text-slate-600">
          记录我的思考、学习和创作过程，包含AI、Web3、网络基础、电脑装机、运动健身、营养补剂等等。
        </p>
      }
    >
      <div className="mt-2 grid gap-3">
        <MarqueeRow rowPosts={rowOne} direction="right" rowIndex={0} phaseClass="scroller-phase-a" />
        <MarqueeRow rowPosts={rowTwo} direction="left" rowIndex={1} phaseClass="scroller-phase-a" />
        <MarqueeRow rowPosts={rowThree} direction="right" rowIndex={2} phaseClass="scroller-phase-b" />
      </div>
    </SectionShell>
  );
}
