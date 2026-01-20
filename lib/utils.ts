import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets base URL for the app
 */
export function getBaseUrl(slug?: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://stopbuydomain.vercel.app");

  if (!slug) return baseUrl;

  // Ensure slug starts with forward slash
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${baseUrl}${normalizedSlug}`;
}
