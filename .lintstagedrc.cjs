const path = require("node:path")

const quote = (value) => `"${value.replace(/(["\\$`])/g, "\\$1")}"`
const toRelative = (baseDir, files) =>
  files.map((file) => path.relative(baseDir, file))

module.exports = {
  "apps/web/**/*.{js,jsx,ts,tsx,mjs,cjs}": (files) => {
    const webFiles = toRelative("apps/web", files)
    return [
      `pnpm --dir apps/web exec eslint --fix ${webFiles.map(quote).join(" ")}`,
      `prettier --write ${files.map(quote).join(" ")}`,
    ]
  },
  "packages/ui/**/*.{js,jsx,ts,tsx,mjs,cjs}": (files) => {
    const uiFiles = toRelative("packages/ui", files)
    return [
      `pnpm --dir packages/ui exec eslint --fix ${uiFiles.map(quote).join(" ")}`,
      `prettier --write ${files.map(quote).join(" ")}`,
    ]
  },
  "packages/eslint-config/**/*.{js,mjs,cjs}": ["prettier --write"],
  "*.{js,jsx,ts,tsx,mjs,cjs}": ["prettier --write"],
  "*.{json,md,yml,yaml,css,scss,html}": ["prettier --write"],
  "*.go": ["gofmt -w"],
}
