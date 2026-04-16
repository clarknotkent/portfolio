import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path) {
    return path;
  }

  // Keep absolute and special-scheme URLs untouched.
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!publicBasePath) {
    return normalizedPath;
  }

  if (normalizedPath === publicBasePath || normalizedPath.startsWith(`${publicBasePath}/`)) {
    return normalizedPath;
  }

  return `${publicBasePath}${normalizedPath}`;
}
