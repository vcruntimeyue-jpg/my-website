import fs from "node:fs";
import path from "node:path";

export const repoRoot = path.resolve(import.meta.dirname, "../..");

export function addError(errors, message) {
  errors.push(message);
}

export function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function assertRequiredText(errors, value, fieldPath) {
  if (!hasText(value)) {
    addError(errors, `${fieldPath}: must be a non-empty string`);
  }
}

export function assertArray(errors, value, fieldPath) {
  if (!Array.isArray(value)) {
    addError(errors, `${fieldPath}: must be an array`);
    return false;
  }

  return true;
}

export function assertUnique(errors, values, fieldPath) {
  const seen = new Set();

  values.forEach((value) => {
    if (seen.has(value)) {
      addError(errors, `${fieldPath}: duplicate value "${value}"`);
      return;
    }

    seen.add(value);
  });
}

export function walkValues(value, visitor, fieldPath = "root") {
  visitor(value, fieldPath);

  if (Array.isArray(value)) {
    value.forEach((item, index) => walkValues(item, visitor, `${fieldPath}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => {
      walkValues(item, visitor, `${fieldPath}.${key}`);
    });
  }
}

export function isLikelyAssetPath(value) {
  return typeof value === "string" && /^\/.+\.(png|jpe?g|webp|gif|svg|ico)$/i.test(value);
}

export function resolvePublicAsset(assetPath) {
  const cleanPath = assetPath.replace(/^\//, "");
  const publicCandidate = path.join(repoRoot, "public", cleanPath);
  const appCandidate = path.join(repoRoot, "app", cleanPath);

  if (fs.existsSync(publicCandidate)) {
    return publicCandidate;
  }

  if (fs.existsSync(appCandidate)) {
    return appCandidate;
  }

  return null;
}

export function readRepoFile(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
}
