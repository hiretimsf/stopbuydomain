/**
 * SEO utility functions for optimizing meta titles and descriptions
 */

/**
 * Truncates a title to the recommended SEO length
 * Google typically displays 50-60 characters for titles
 * @param title - The title to truncate
 * @param maxLength - Maximum length (default: 60)
 * @returns Truncated title
 */
export function truncateTitle(title: string, maxLength = 60): string {
  if (title.length <= maxLength) return title;

  // Try to truncate at a word boundary
  const truncated = title.slice(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.7) {
    return truncated.slice(0, lastSpace) + "...";
  }

  return truncated + "...";
}

/**
 * Truncates a description to the recommended SEO length
 * Google typically displays 150-160 characters for descriptions
 * @param description - The description to truncate
 * @param maxLength - Maximum length (default: 160)
 * @returns Truncated description
 */
export function truncateDescription(
  description: string,
  maxLength = 160
): string {
  if (description.length <= maxLength) return description;

  // Try to truncate at a word boundary
  const truncated = description.slice(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace > maxLength * 0.7) {
    return truncated.slice(0, lastSpace) + "...";
  }

  return truncated + "...";
}

/**
 * Generates a canonical URL from a slug
 * @param baseUrl - The base URL of the site
 * @param slug - The page slug
 * @returns Full canonical URL
 */
export function getCanonicalUrl(baseUrl: string, slug: string): string {
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${baseUrl}${normalizedSlug}`;
}
