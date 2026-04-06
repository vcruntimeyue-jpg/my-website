import { blogCategoryOrder, getBlogCategoryStyle } from "../content/presentation";
import SectionShell from "./SectionShell";

function formatDate(input) {
  return new Date(input).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function ensureMinItems(row, fallback, minCount = 4) {
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
  const grouped = posts.reduce((result, post) => {
    const key = post.category;

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(post);
    return result;
  }, {});
  const rows = [[], [], []];

  blogCategoryOrder.forEach((category, categoryIndex) => {
    const categoryPosts = grouped[category] || [];

    categoryPosts.forEach((post, postIndex) => {
      rows[(categoryIndex + postIndex) % rows.length].push(post);
    });
  });

  const leftovers = posts.filter((post) => !blogCategoryOrder.includes(post.category));

  leftovers.forEach((post, index) => {
    rows[index % rows.length].push(post);
  });

  return {
    rowOne: ensureMinItems(rows[0], posts, 4),
    rowTwo: ensureMinItems(rows[1], posts, 4),
    rowThree: ensureMinItems(rows[2], posts, 4),
  };
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
      <div className="mt-2 grid" style={{ gap: "0.75rem" }}>
        <MarqueeRow rowPosts={rowOne} direction="right" rowIndex={0} phaseClass="scroller-phase-a" />
        <MarqueeRow rowPosts={rowTwo} direction="left" rowIndex={1} phaseClass="scroller-phase-a" />
        <MarqueeRow rowPosts={rowThree} direction="right" rowIndex={2} phaseClass="scroller-phase-b" />
      </div>
    </SectionShell>
  );
}
