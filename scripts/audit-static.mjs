import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const roots = ["src", "server", "api"];
const extensions = new Set([".js", ".jsx", ".mjs"]);
const failures = [];
const warnings = [];
let checkedSourceFiles = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (["node_modules", "dist", ".git"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (extensions.has(extname(entry.name))) files.push(path);
  }
  return files;
}

const rules = [
  ["window API", /\bwindow\s*\./g, "Use React/document-based application behavior instead of window.* APIs."],
  ["browser alert", /\balert\s*\(/g, "Use a custom inline or modal feedback component."],
  ["browser confirm", /\bconfirm\s*\(/g, "Use a custom confirmation modal."],
  ["browser prompt", /\bprompt\s*\(/g, "Use a custom form interaction."],
  ["placeholder page", /PlaceholderPage/g, "Replace placeholder routing with a finished page."],
];

for (const sourceRoot of roots) {
  let files = [];
  try {
    files = await walk(join(root, sourceRoot));
  } catch {
    continue;
  }

  for (const file of files) {
    checkedSourceFiles += 1;
    const content = await readFile(file, "utf8");
    const display = relative(root, file);

    for (const [name, pattern, guidance] of rules) {
      pattern.lastIndex = 0;
      if (pattern.test(content)) failures.push(`${display}: ${name}. ${guidance}`);
    }

    const blankTargets = [...content.matchAll(/target=["']_blank["']/g)].length;
    const safeRels = [...content.matchAll(/rel=["'][^"']*(?:noreferrer|noopener)[^"']*["']/g)].length;
    if (blankTargets > safeRels) failures.push(`${display}: found target="_blank" without a matching noreferrer/noopener rel.`);

    if (/\b(?:TODO|FIXME)\b/.test(content)) warnings.push(`${display}: contains TODO/FIXME markers.`);
  }
}

const result = {
  passed: failures.length === 0,
  failures,
  warnings,
  checkedSourceFiles,
};

console.log(JSON.stringify(result, null, 2));
if (failures.length) process.exit(1);
