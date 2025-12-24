/**
 * Common types used across all CMS entities
 */

/**
 * Base pagination options for list queries
 */
export interface PaginationOptions {
  limit?: number;
  offset?: number;
}

/**
 * Base filter options that can be extended by entity-specific filters
 */
export interface BaseFilters extends PaginationOptions {
  /** Optional preview mode flag */
  isPreview?: boolean;
}

/**
 * Standard response wrapper for paginated results
 */
export interface PaginatedResult<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

/**
 * Taxonomy tag structure
 * Derived from Article.php getAllTaxonomyTags()
 */
export interface TaxonomyTagValue {
  id: number;
  label: string;
  slug: string;
}

export interface TaxonomyTag {
  name: string;
  values: TaxonomyTagValue[] | null;
}

/**
 * URL Bucket for article categorization
 * Derived from Article.php getUrlBucket()
 */
export interface UrlBucket {
  termId: number;
  name: string;
  slug: string;
}

/**
 * Sponsorship information
 * Derived from Article.php getSponsorship()
 */
export interface Sponsorship {
  name: string | null;
  url: string | null;
  logoUrl: string | null;
  text: string | null;
}

/**
 * Link type for navigation and content links
 */
export interface Link {
  text: string;
  url: string;
  isExternal?: boolean;
}

/**
 * Category information
 */
export interface Category {
  id: string;
  name: string;
  pathname: string;
}
