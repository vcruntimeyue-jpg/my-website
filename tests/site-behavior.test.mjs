import test from "node:test";
import assert from "node:assert/strict";
import { getFeaturedGames } from "../app/content/presentation.js";
import { calculateProgress } from "../app/content/progress.js";
import { siteContent } from "../app/content/siteContent.js";
import sitemap from "../app/sitemap.js";

test("hero actions expose the primary content journeys", () => {
  assert.equal(siteContent.hero.primaryAction.href, "#blog");
  assert.equal(siteContent.hero.secondaryAction.href, "/game");
});

test("upcoming sections keep stable navigation anchors", () => {
  assert.deepEqual(
    siteContent.sections.upcoming.map((item) => item.id),
    ["music", "images", "favorites"],
  );
  assert.ok(siteContent.sections.upcoming.every((item) => item.topics.length > 0));
});

test("featured games retain contiguous display ordering", () => {
  assert.deepEqual(
    getFeaturedGames(siteContent.sections.game).map((item) => item.featuredOrder),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );
});

test("progress calculation handles completed and partial phases", () => {
  assert.equal(
    calculateProgress([
      { id: "A", name: "完成", weight: 40, status: "done" },
      { id: "B", name: "部分", weight: 20, status: "partial" },
    ]),
    50,
  );
});

test("sitemap exposes the home page and game archive", () => {
  assert.deepEqual(
    sitemap().map((entry) => entry.url),
    ["https://vcrunyue.com", "https://vcrunyue.com/game"],
  );
});
