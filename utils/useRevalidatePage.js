import { readdirSync, existsSync } from "fs";

import path from "path";

const getPagePaths = (dir, rootDir) => {
  let paths = [];

  const items = readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      paths = paths.concat(getPagePaths(itemPath, rootDir));
    } else if (item.name === "page.js") {
      const relativePath = path.relative(rootDir, itemPath).replace(/\\/g, "/");
      const pagePath = "/" + relativePath.replace(/page\.js$/, "");

      if (!/\[\w+\]/.test(pagePath)) {
        paths.push(pagePath);
      }
    }
  }

  return paths;
};

const useRevalidatePage = (customPath) => {
  if (typeof window === "undefined") {
    let trimmedPaths = null;
    if (typeof customPath === "string") {
      trimmedPaths = [customPath];
    } else {
      const appDirectoryInSrc = path.join(process.cwd(), "src", "app");
      const appDirectoryRoot = path.join(process.cwd(), "app");

      const appDirectory = existsSync(appDirectoryInSrc)
        ? appDirectoryInSrc
        : appDirectoryRoot;

      const paths = getPagePaths(appDirectory, appDirectory);

      trimmedPaths = paths
        .map((p) => p.replace(/^\/src\/app/, ""))
        .map((p) => p.replace(/\/page$/, ""))
        .map((p) => (p.endsWith("/") ? p.slice(0, -1) : p));
    }

    trimmedPaths.forEach((path) => {
      revalidatePath(path);
    });
  }
};

export { useRevalidatePage };
