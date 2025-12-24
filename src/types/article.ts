/**
 * Article entity type
 * Derived from tpg-runway/wp-content/themes/tpg-runway/entities/Article.php
 */

import { Image } from "./image";
import { BaseFilters, Sponsorship, TaxonomyTag, UrlBucket } from "./common";

/**
 * Full Article entity
 * Matches Article.php constructor exactly
 */
export interface Article {
  /** WordPress post ID */
  wpPostId: number;

  /** URL-friendly slug */
  slug: string;

  /** Legacy single author ID (deprecated) */
  legacyAuthor: number | null;

  /** Primary authors (array of author data) */
  primaryAuthors: ArticleAuthor[];

  /** Secondary/contributing authors */
  secondaryAuthors: ArticleAuthor[];

  /** Editors who edited the article */
  editedBy: ArticleAuthor[];

  /** Reviewers who reviewed the article */
  reviewedBy: ArticleAuthor[];

  /** Featured/hero image */
  featuredImage: Image | null;

  /** Social media image override */
  socialImageOverride: Image | null;

  /** Sponsorship information (nullable array in PHP) */
  sponsorship: Sponsorship | null;

  /** All taxonomy tags */
  tags: TaxonomyTag[];

  /** Primary subject taxonomy slug */
  taxonomyPrimarySubject: string | null;

  /** Type of post taxonomy slug */
  taxonomyTypeOfPost: string | null;

  /** Surrogate keys for cache invalidation */
  surrogateKeys: string[];

  /** Post format (e.g., 'standard', 'review') */
  format: string;

  /** Number of ad slots */
  slots: number;

  /** Meta description */
  description: string | null;

  /** Article title */
  title: string;

  /** Article content as HTML */
  contentHtml: string;

  /** AI-generated overview (stored as string/JSON in PHP) */
  aiOverview: string | null;

  /** Canonical URL override */
  canonicalUrl: string | null;

  /** Editor's note content */
  editorsNote: string;

  /** Is health-related content */
  healthRelated: boolean;

  /** Whether article should be indexed */
  isIndexed: boolean;

  /** Show editorial disclaimer */
  showEditorialDisclaimer: boolean;

  /** Show newsletter callout */
  showNewsletterCallout: boolean;

  /** Show on homepage */
  showOnHomepage: boolean;

  /** Whether to suppress AI overview */
  suppressAiOverview: boolean;

  /** SEO title tag override */
  titleTag: string | null;

  /** Summary bullet points */
  summary: string[];

  /** Published date (ISO string) */
  published: string;

  /** Last updated date (ISO string) */
  lastUpdated: string;

  /** Post status */
  status: string;

  /** Article pathname (full URL path) */
  pathname: string;

  /** WordPress GUID */
  guid: string;

  /** URL bucket for categorization (nullable array in PHP) */
  urlBucket: UrlBucket | null;

  /** Show right rail ads */
  showRightRailAds: boolean;

  /** Show leaderboard ads */
  showLeaderboardAds: boolean;

  /** Show featured card widget */
  showFeaturedCard: boolean;

  /** Featured card override (card PID) */
  featuredCardOverride: number | null;

  /** Card PIDs for cards table */
  cardsTablePids: number[];

  /** Primary author slugs (for efficient lookups) */
  primaryAuthorSlugs: string[];

  /** Secondary author slugs */
  secondaryAuthorSlugs: string[];

  /** Edited by slugs */
  editedBySlugs: string[];

  /** Reviewed by slugs */
  reviewedBySlugs: string[];

  /** Legacy author slug */
  legacyAuthorSlug: string | null;

  /** Related stories slugs */
  relatedStoriesSlugs: string[];
}

/**
 * Author data embedded in articles
 * Lightweight version for article bylines
 */
export interface ArticleAuthor {
  /** WordPress user ID */
  id: number;

  /** URL-friendly slug */
  slug: string;

  /** Display name */
  name: string;

  /** Avatar image */
  avatar: Image | null;
}

/**
 * Lightweight article tile for lists/feeds
 */
export interface ArticleTile {
  wpPostId: number;
  slug: string;
  pathname: string;
  title: string;
  published: string;
  featuredImage: Image | null;
  primarySubject: string | null;
}

/**
 * Options for fetching a single article
 */
export interface ArticleOptions {
  /** Include preview/draft content */
  isPreview?: boolean;

  /** WordPress post ID (alternative to slug) */
  wpPostId?: number;
}

/**
 * Filters for querying articles
 */
export interface ArticleFilters extends BaseFilters {
  /** Filter by primary subject */
  primarySubject?: string;

  /** Filter by author slug */
  authorSlug?: string;

  /** Slugs to exclude from results */
  excludeSlugs?: string[];

  /** Only include homepage articles */
  showOnHomepage?: boolean;

  /** Filter by status */
  status?: "publish" | "draft" | "pending" | "private";
}

/**
 * Filters for querying article tiles
 */
export interface ArticleTileFilters extends BaseFilters {
  /** Filter by primary subject */
  primarySubject?: string;

  /** Filter by author slug */
  authorSlug?: string;

  /** Slugs to exclude from results */
  excludeSlugs?: string[];

  /** Only include homepage articles */
  showOnHomepage?: boolean;
}
