export const siteContent = {
  site: {
    name: "VCRUNYUE",
    locale: "zh-CN",
    domain: "https://vcrunyue.com",
    title: "Vcrunyue Portfolio",
    description:
      "个人展示网站，记录我的创作、技术实践、游戏与音乐项目，以及长期兴趣收藏。",
    tagline:
      "感谢您访问我的个人网站，这里记录了我的创作、思考和探索。",
    taglineHighlight: "希望您能找到感兴趣的内容。",
  },
  socialLinks: [
    {
      platform: "GitHub",
      label: "GitHub",
      iconKey: "github",
      url: "https://github.com/SamuelQZQ",
    },
    {
      platform: "Twitter/X",
      label: "Twitter/X",
      iconKey: "twitter",
      url: "https://x.com/SamuelQZQ",
    },
    {
      platform: "Bilibili",
      label: "Bilibili",
      iconKey: "bilibili",
      url: "https://space.bilibili.com/4848323",
    },
    {
      platform: "Douyin",
      label: "Douyin",
      iconKey: "tiktok",
      url: "https://www.douyin.com/user/MS4wLjABAAAAcBGY4RqDTLberZGiFTk-nG_L0hVwrFC7Bii_20YdBgBDGu-9JoA2L6jtkpdnpBpr",
    },
  ],
  navLinks: [
    { label: "博客", href: "#blog" },
    { label: "游戏", href: "#game" },
    { label: "音乐", href: "#music" },
    { label: "图片", href: "#images" },
    { label: "收藏", href: "#favorites" },
  ],
  sections: {
    blog: [
      {
        title: "把 AI 真正接进日常创作",
        date: "2026-04-01",
        summary:
          "记录我怎样把检索、整理、初稿和复盘拆成可复用流程，让 AI 真的成为日常工作的一部分。",
        cover: "/assets/blog/blog-react.webp",
        url: "https://openai.com/",
        category: "AI",
        tags: ["AI", "工作流", "创作"],
      },
      {
        title: "AI 工作流的输入输出设计",
        date: "2026-03-15",
        summary:
          "比起不断叠加工具，我更关心输入格式、上下文组织和交付标准如何让结果稳定下来。",
        cover: "/assets/blog/blog-frontend.webp",
        url: "https://platform.openai.com/docs",
        category: "AI",
        tags: ["AI", "效率", "方法论"],
      },
      {
        title: "从钱包到签名：一次讲清 Web3 基础操作",
        date: "2026-03-01",
        summary:
          "把钱包、签名、授权和链上交互拆成几步看，Web3 的基础路径其实没有想象中那么绕。",
        cover: "/assets/blog/blog-nomad.webp",
        url: "https://ethereum.org/",
        category: "Web3",
        tags: ["Web3", "钱包", "基础"],
      },
      {
        title: "链上身份能不能成为长期内容资产",
        date: "2026-02-15",
        summary:
          "从所有权、公开可验证和可迁移性出发，梳理链上身份与长期写作之间真正有价值的连接点。",
        cover: "/assets/blog/blog-tech-life.webp",
        url: "https://ethereum.org/en/web3/",
        category: "Web3",
        tags: ["Web3", "身份", "内容"],
      },
      {
        title: "前端工程师也该懂的 DNS 与 HTTPS",
        date: "2026-02-01",
        summary:
          "把域名解析、证书、CDN 和缓存串成一条线，线上排障时就不会只盯着页面本身发呆。",
        cover: "/assets/blog/blog-performance.webp",
        url: "https://developers.cloudflare.com/dns/",
        category: "网络基础",
        tags: ["网络基础", "DNS", "HTTPS"],
      },
      {
        title: "家庭网络排障清单",
        date: "2026-01-20",
        summary:
          "整理光猫、路由器、Wi-Fi 干扰、DNS 与端口转发这些最常见的问题定位顺序，尽量少走弯路。",
        cover: "/assets/blog/blog-frontend.webp",
        url: "https://www.cloudflare.com/learning/dns/what-is-dns/",
        category: "网络基础",
        tags: ["网络基础", "排障", "家庭网络"],
      },
      {
        title: "一台创作主机的装机思路",
        date: "2026-01-10",
        summary:
          "从 CPU、显卡、内存、硬盘与散热预算出发，讨论一套更平衡而不是只堆参数的配置方式。",
        cover: "/assets/blog/blog-tech-life.webp",
        url: "https://www.tomshardware.com/",
        category: "电脑装机",
        tags: ["电脑装机", "硬件", "配置"],
      },
      {
        title: "显示器、键盘与桌面效率",
        date: "2025-12-26",
        summary:
          "长时间写作、剪辑和开发时，哪些外设升级真的能改变工作体验，哪些只是看起来更专业。",
        cover: "/assets/blog/blog-performance.webp",
        url: "https://www.rtings.com/monitor",
        category: "电脑装机",
        tags: ["电脑装机", "外设", "效率"],
      },
      {
        title: "技术与生活的平衡",
        date: "2025-12-12",
        summary:
          "从训练安排、创作节奏和时间块管理三个角度总结，怎样把深度工作和生活体验放在同一条主线上。",
        cover: "/assets/blog/blog-tech-life.webp",
        url: "https://www.strongerbyscience.com/",
        category: "运动健身",
        tags: ["运动健身", "节奏", "生活方式"],
      },
      {
        title: "恢复比训练更难：一周节奏记录",
        date: "2025-11-28",
        summary:
          "记录训练量、睡眠和工作强度如何互相牵制，以及我怎样调整每周节奏避免长期透支。",
        cover: "/assets/blog/blog-nomad.webp",
        url: "https://www.precisionnutrition.com/",
        category: "运动健身",
        tags: ["运动健身", "恢复", "训练"],
      },
      {
        title: "日常补剂怎么做减法",
        date: "2025-11-15",
        summary:
          "不追求堆满一桌瓶瓶罐罐，而是从目标、饮食结构和反馈出发，做更克制的补剂选择。",
        cover: "/assets/blog/blog-react.webp",
        url: "https://examine.com/",
        category: "营养补剂",
        tags: ["营养补剂", "补剂", "饮食"],
      },
      {
        title: "训练期饮食和补剂安排复盘",
        date: "2025-11-01",
        summary:
          "把蛋白质、碳水、肌酸和电解质的使用场景拆开看，减少跟风式补充带来的混乱。",
        cover: "/assets/blog/blog-performance.webp",
        url: "https://www.healthline.com/nutrition/sports-nutrition-guide",
        category: "营养补剂",
        tags: ["营养补剂", "训练", "恢复"],
      },
    ],
    game: [
      {
        title: "Moth and Bat",
        summary: "Ludum Dare 41 参赛作品，核心目标是用最小机制构建高反馈玩法循环。",
        cover: "/assets/games/game-jam-1.webp",
        url: "https://github.com/SamuelQZQ/2018GameJam",
        type: "Game Jam",
      },
      {
        title: "Naughty Cat",
        summary: "61Children Game Jam 参赛作品，聚焦轻量关卡设计和操作手感。",
        cover: "/assets/games/game-jam-2.webp",
        url: "https://github.com/SamuelQZQ/61Children-Game-Jam",
        type: "Game Jam",
      },
      {
        title: "Ring of Elysium",
        summary: "商业项目经历，参与多人在线产品中的体验迭代与系统联动。",
        cover: "/assets/games/game-company.webp",
        url: "https://store.steampowered.com/app/755790/Ring_of_Elysium/",
        type: "Commercial",
      },
      {
        title: "游戏动机模型",
        summary: "从玩家心理学视角拆解持续参与机制，关注成长回路与动机触发。",
        cover: "/assets/games/game-design-1.webp",
        url: "https://www.bilibili.com/video/BV1CM411r76N/",
        type: "Essay",
      },
      {
        title: "游戏平衡分析",
        summary: "对数值平衡、策略深度和玩家反馈进行结构化分析。",
        cover: "/assets/games/game-design-2.webp",
        url: "https://www.wikiwand.com/en/Game_balance",
        type: "Essay",
      },
    ],
    music: [
      {
        title: "ReturnTrue Band",
        summary: "程序员摇滚项目，关注编曲表达和舞台叙事。",
        cover: "/assets/music/music-gif.gif",
        url: "https://youtube.com/shorts/nvCqd36_RYQ",
      },
      {
        title: "Suhr Modern Satin",
        summary: "电吉他音色记录与演奏片段，持续打磨动态控制。",
        cover: "/assets/music/music-cover.webp",
        url: "https://www.suhr.com/electric-guitars/modern/",
      },
      {
        title: "Arturia MicroFreak",
        summary: "硬件合成器音色实验，探索 texture 与节奏结构。",
        cover: "/assets/music/music-cover.webp",
        url: "https://www.arturia.com/products/hardware-synths/microfreak/overview",
      },
    ],
    images: [
      {
        title: "城市风光",
        desc: "以建筑线条和光影层次呈现现代城市空间节奏。",
        image: "/assets/images/photo-1.webp",
        url: "https://www.behance.net/",
        category: "摄影",
      },
      {
        title: "自然景观",
        desc: "记录山海、云层与天气变化形成的自然秩序。",
        image: "/assets/images/photo-2.webp",
        url: "https://www.nationalgeographic.com/photography",
        category: "自然",
      },
      {
        title: "创意设计",
        desc: "从形状、材质与排版关系中寻找视觉表达的平衡。",
        image: "/assets/images/photo-3.webp",
        url: "https://dribbble.com/",
        category: "设计",
      },
      {
        title: "街头摄影",
        desc: "捕捉日常空间中的人、光、动势与临场感。",
        image: "/assets/images/photo-4.webp",
        url: "https://www.magnumphotos.com/",
        category: "街拍",
      },
      {
        title: "科技产品",
        desc: "关注产品结构、工业设计与交互细节的一致性。",
        image: "/assets/images/photo-5.webp",
        url: "https://www.theverge.com/tech",
        category: "科技",
      },
      {
        title: "旅行见闻",
        desc: "记录不同文化和地理空间带来的体验差异。",
        image: "/assets/images/photo-6.webp",
        url: "https://www.lonelyplanet.com/",
        category: "旅行",
      },
    ],
    favorites: [
      {
        group: "书籍",
        items: [
          {
            title: "Atomic Habits",
            subtitle: "James Clear",
            desc: "通过小步迭代构建长期复利习惯。",
            cover: "/assets/favorites/books/book-1.webp",
            url: "https://www.goodreads.com/book/show/40121378-atomic-habits",
          },
          {
            title: "Clean Code",
            subtitle: "Robert C. Martin",
            desc: "面向可维护性的代码组织与工程纪律。",
            cover: "/assets/favorites/books/book-2.webp",
            url: "https://www.goodreads.com/book/show/3735293-clean-code",
          },
          {
            title: "Designing Data-Intensive Applications",
            subtitle: "Martin Kleppmann",
            desc: "数据系统设计中的一致性、扩展与可靠性。",
            cover: "/assets/favorites/books/book-3.webp",
            url: "https://www.goodreads.com/book/show/23463279-designing-data-intensive-applications",
          },
        ],
      },
      {
        group: "电影",
        items: [
          {
            title: "Inception",
            subtitle: "Christopher Nolan",
            desc: "在叙事结构与视觉表达上建立多层现实体验。",
            cover: "/assets/favorites/movies/movie-1.webp",
            url: "https://www.imdb.com/title/tt1375666/",
          },
          {
            title: "Interstellar",
            subtitle: "Christopher Nolan",
            desc: "将科学设定与情感叙事进行高密度融合。",
            cover: "/assets/favorites/movies/movie-2.webp",
            url: "https://www.imdb.com/title/tt0816692/",
          },
          {
            title: "The Matrix",
            subtitle: "The Wachowskis",
            desc: "关于现实与系统边界的经典科幻表达。",
            cover: "/assets/favorites/movies/movie-3.webp",
            url: "https://www.imdb.com/title/tt0133093/",
          },
        ],
      },
      {
        group: "工具",
        items: [
          {
            title: "Visual Studio Code",
            subtitle: "Code Editor",
            desc: "高扩展性的开发编辑器。",
            cover: "/window.svg",
            url: "https://code.visualstudio.com/",
          },
          {
            title: "Figma",
            subtitle: "Design Tool",
            desc: "高效协作与界面设计工具。",
            cover: "/file.svg",
            url: "https://www.figma.com/",
          },
          {
            title: "GitHub",
            subtitle: "Code Platform",
            desc: "版本管理与工程协作基础设施。",
            cover: "/globe.svg",
            url: "https://github.com/",
          },
        ],
      },
      {
        group: "网站",
        items: [
          {
            title: "MDN Web Docs",
            subtitle: "Web 标准文档",
            desc: "最权威的 Web API 与规范实践资料。",
            cover: "/next.svg",
            url: "https://developer.mozilla.org/",
          },
          {
            title: "Can I Use",
            subtitle: "兼容性查询",
            desc: "前端特性在各浏览器中的支持情况。",
            cover: "/vercel.svg",
            url: "https://caniuse.com/",
          },
          {
            title: "CSS-Tricks",
            subtitle: "前端文章",
            desc: "CSS 与前端工程实践的长期内容库。",
            cover: "/file.svg",
            url: "https://css-tricks.com/",
          },
        ],
      },
    ],
  },
  progress: [
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
  ],
};

export function calculateProgress(progressPhases) {
  return progressPhases.reduce((sum, phase) => {
    const rate = phase.status === "done" ? 1 : phase.status === "partial" ? 0.5 : 0;
    return sum + phase.weight * rate;
  }, 0);
}
