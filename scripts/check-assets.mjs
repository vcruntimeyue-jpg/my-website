import { siteContent } from "../app/content/siteContent.js";
import { addError, isLikelyAssetPath, resolvePublicAsset, walkValues } from "./lib/content-helpers.mjs";

const errors = [];
const assetPaths = new Set();

walkValues(siteContent, (value) => {
  if (isLikelyAssetPath(value)) {
    assetPaths.add(value);
  }
});

[...assetPaths].sort().forEach((assetPath) => {
  if (!resolvePublicAsset(assetPath)) {
    addError(errors, `missing local asset: ${assetPath}`);
  }
});

if (errors.length > 0) {
  console.error("Asset check failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Asset check passed. Verified ${assetPaths.size} local asset references.`);
