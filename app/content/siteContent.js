import { navLinks, socialLinks } from "./navigation.js";
import { blogPosts } from "./sections/blog.js";
import { favoriteGroups } from "./sections/favorites.js";
import { gameEntries } from "./sections/game.js";
import { imageEntries } from "./sections/images.js";
import { musicEntries } from "./sections/music.js";
import { calculateProgress, progress } from "./progress.js";
import { site } from "./site.js";

export const siteContent = {
  site,
  socialLinks,
  navLinks,
  sections: {
    blog: blogPosts,
    game: gameEntries,
    music: musicEntries,
    images: imageEntries,
    favorites: favoriteGroups,
  },
  progress,
};

export { calculateProgress };
