/**
 * Page entity types
 * Derived from tpg-runway/wp-content/themes/tpg-runway/entities/
 */

import { Link } from "./common";

/**
 * General page entity
 * Matches GeneralPage.php constructor exactly
 */
export interface GeneralPage {
  /** WordPress post ID */
  wpPostId: number;

  /** URL-friendly slug */
  slug: string;

  /** Legacy author ID (deprecated) */
  legacyAuthor: number | null;

  /** Page title */
  title: string;

  /** Page content as HTML */
  contentHtml: string;

  /** Published date (ISO string) */
  published: string;

  /** Last updated date (ISO string) */
  lastUpdated: string;

  /** Post status */
  status: string;

  /** Full URL pathname */
  pathname: string;

  /** WordPress GUID */
  guid: string;
}

/**
 * SEO data for editorial hub
 */
export interface EditorialHubSeo {
  title: string | null;
  description: string | null;
}

/**
 * Header section for editorial hub
 */
export interface EditorialHubHeaderSection {
  title: string | null;
  subtitle: string | null;
  image: string | null;
}

/**
 * Editorial hub entity
 * Matches EditorialHub.php constructor exactly
 */
export interface EditorialHub {
  /** WordPress post ID */
  wpPostId: number;

  /** URL-friendly slug */
  slug: string;

  /** Hub title */
  title: string;

  /** Content as HTML */
  contentHtml: string;

  /** Whether to show ads */
  showAds: boolean;

  /** Header for all articles section */
  allArticlesHeader: string | null;

  /** Header for latest articles section */
  latestArticlesHeader: string | null;

  /** Newsletter message type */
  newsletterMessageType: string | null;

  /** Header section data */
  headerSection: EditorialHubHeaderSection | null;

  /** SEO metadata */
  seo: EditorialHubSeo | null;

  /** Published date (ISO string) */
  published: string;

  /** Last updated date (ISO string) */
  lastUpdated: string;

  /** Post status */
  status: string;

  /** Full URL pathname */
  pathname: string;

  /** WordPress GUID */
  guid: string;
}

/**
 * Quick link for homepage
 */
export interface QuickLink {
  label: string;
  url: string;
  icon: string | null;
}

/**
 * Featured author data for homepage
 */
export interface FeaturedAuthor {
  id: number;
  slug: string;
  name: string;
  avatar: string | null;
}

/**
 * Homepage entity
 * Matches Homepage.php constructor exactly
 */
export interface Homepage {
  /** Whether to show ads */
  showAds: boolean;

  /** SEO title */
  seoTitle: string;

  /** SEO description */
  seoDescription: string;

  /** SEO long description */
  seoLongDescription: string;

  /** Quick links array */
  quickLinks: QuickLink[];

  /** Navigation pills */
  navPills: Link[];

  /** Featured article slug */
  featuredArticle: string | null;

  /** Featured authors section header */
  featuredAuthorsHeader: string;

  /** Featured authors section subheader */
  featuredAuthorsSubheader: string;

  /** Pinned article slugs */
  pinnedArticles: string[];

  /** Latest article slugs */
  latestArticles: string[];

  /** Featured author IDs */
  featuredAuthorIds: number[];

  /** Featured authors data */
  featuredAuthors: FeaturedAuthor[];

  /** Article sections (nullable) */
  articleSections: HomepageSection[] | null;

  /** Last modified timestamp */
  lastModified: string;
}

/**
 * Homepage article section
 */
export interface HomepageSection {
  title: string;
  articleSlugs: string[];
  link: Link | null;
}

/**
 * Page filters for queries
 */
export interface PageFilters {
  /** Filter by slug */
  slug?: string;

  /** Include preview/draft content */
  isPreview?: boolean;
}
