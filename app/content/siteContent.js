import { navLinks, socialLinks } from "./navigation.js";
import { hero } from "./hero.js";
import { blogPosts } from "./sections/blog.js";
import { gameEntries } from "./sections/game.js";
import { upcomingSections } from "./sections/upcoming.js";
import { calculateProgress, progress } from "./progress.js";
import { site } from "./site.js";

export const siteContent = {
  site,
  hero,
  socialLinks,
  navLinks,
  sections: {
    blog: blogPosts,
    game: gameEntries,
    upcoming: upcomingSections,
  },
  progress,
};

export { calculateProgress };
