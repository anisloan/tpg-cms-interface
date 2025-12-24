/**
 * CMS Interface - The Core Port
 *
 * This interface defines the contract that all CMS adapters must implement.
 * Following the Hexagonal Architecture (Ports & Adapters) pattern, this port
 * abstracts away the underlying CMS implementation.
 *
 * @see https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/hexagonal-architecture.html
 */

import {
  Article,
  ArticleOptions,
  ArticleFilters,
  ArticleTile,
  ArticleTileFilters,
  Author,
  AuthorFilters,
  GeneralPage,
  Homepage,
  EditorialHub,
  PageFilters,
  FeaturedCard,
  TopOffers,
} from "../types";

/**
 * CMSInterface
 *
 * The core port interface for CMS operations. All CMS adapters must implement this interface.
 */
export interface CMSInterface {
  // Article Operations
  getArticleBySlug(
    slug: string,
    options?: ArticleOptions
  ): Promise<Article | null>;
  getArticleById(id: number, options?: ArticleOptions): Promise<Article | null>;
  getArticles(filters: ArticleFilters): Promise<Article[]>;
  getArticleTiles(filters: ArticleTileFilters): Promise<ArticleTile[]>;

  // Author Operations
  getAuthorBySlug(slug: string): Promise<Author | null>;
  getAuthorById(id: number): Promise<Author | null>;
  getAuthors(filters?: AuthorFilters): Promise<Author[]>;

  // Page Operations
  getHomepage(options?: PageFilters): Promise<Homepage | null>;
  getEditorialHub(
    slug: string,
    options?: PageFilters
  ): Promise<EditorialHub | null>;
  getGeneralPage(
    slug: string,
    options?: PageFilters
  ): Promise<GeneralPage | null>;

  // Card/Widget Operations
  getFeaturedCard(): Promise<FeaturedCard | null>;
  getTopOffers(): Promise<TopOffers | null>;
}
