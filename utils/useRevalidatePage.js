import { readdirSync, existsSync } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

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

const useRevalidatePage = () => {
  if (typeof window === "undefined") {
    // اطمینان از اجرای کد در سرور
    const appDirectoryInSrc = path.join(process.cwd(), "src", "app");
    const appDirectoryRoot = path.join(process.cwd(), "app");

    const appDirectory = existsSync(appDirectoryInSrc)
      ? appDirectoryInSrc
      : appDirectoryRoot;

    const paths = getPagePaths(appDirectory, appDirectory);

    const trimmedPaths = paths.map((p) =>
      p
        .replace(/^\/src\/app/, "")
        .replace(/\/page$/, "")
        .replace(/\/$/, "")
    );

    const validPaths = trimmedPaths.filter((p) => p && p !== "/");

    if (existsSync(path.join(appDirectory, "page.js"))) {
      validPaths.push("/");
    }

    return false;
    validPaths.forEach((path) => {
      try {
        revalidatePath(path);
      } catch (error) {
        console.error(`Failed to revalidate path: ${path}`, error);
      }
    });
  }
};

export { useRevalidatePage };
