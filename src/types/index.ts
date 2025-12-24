/**
 * Type exports for @tpg/cms-interface
 *
 * All entity types are derived from the Runway PHP entities:
 * @see tpg-runway/wp-content/themes/tpg-runway/entities/
 */

// Common types
export type {
  PaginationOptions,
  BaseFilters,
  PaginatedResult,
  TaxonomyTag,
  TaxonomyTagValue,
  UrlBucket,
  Sponsorship,
  Link,
  Category,
} from "./common";

// Image types
export type { Image, CropOffsetPercentage, SocialThumbnails } from "./image";

// Author types
export type {
  Author,
  AuthorFilters,
  TravelStats,
  HowIEarnPointsToTravelItem,
} from "./author";

// Article types
export type {
  Article,
  ArticleAuthor,
  ArticleTile,
  ArticleOptions,
  ArticleFilters,
  ArticleTileFilters,
} from "./article";

// Page types
export type {
  GeneralPage,
  Homepage,
  EditorialHub,
  EditorialHubSeo,
  EditorialHubHeaderSection,
  HomepageSection,
  QuickLink,
  FeaturedAuthor,
  PageFilters,
} from "./page";

// Card types
export type { FeaturedCard, TopOffers } from "./card";
