/**
 * In-Memory CMS Adapter
 *
 * Used for testing. Stores data in memory and returns it directly.
 */

import { CMSInterface } from "../interfaces/CMSInterface";
import {
  Article,
  ArticleTile,
  ArticleFilters,
  ArticleTileFilters,
  ArticleOptions,
  Author,
  AuthorFilters,
  Homepage,
  EditorialHub,
  GeneralPage,
  PageFilters,
  FeaturedCard,
  TopOffers,
} from "../types";

export interface InMemoryData {
  articles?: Article[];
  authors?: Author[];
  homepage?: Homepage;
  editorialHubs?: EditorialHub[];
  generalPages?: GeneralPage[];
  featuredCard?: FeaturedCard;
  topOffers?: TopOffers;
}

export class InMemoryAdapter implements CMSInterface {
  private data: InMemoryData;

  constructor(data: InMemoryData = {}) {
    this.data = data;
  }

  /**
   * Update the in-memory data (useful for tests)
   */
  setData(data: InMemoryData): void {
    this.data = { ...this.data, ...data };
  }

  // ============================================
  // Articles
  // ============================================

  async getArticleBySlug(
    slug: string,
    _options?: ArticleOptions
  ): Promise<Article | null> {
    return this.data.articles?.find((a) => a.slug === slug) ?? null;
  }

  async getArticleById(
    id: number,
    _options?: ArticleOptions
  ): Promise<Article | null> {
    return this.data.articles?.find((a) => a.wpPostId === id) ?? null;
  }

  async getArticles(filters: ArticleFilters): Promise<Article[]> {
    let articles = this.data.articles ?? [];

    if (filters.authorSlug) {
      articles = articles.filter((a) =>
        a.primaryAuthorSlugs?.includes(filters.authorSlug!)
      );
    }

    if (filters.limit) {
      articles = articles.slice(0, filters.limit);
    }

    return articles;
  }

  async getArticleTiles(filters: ArticleTileFilters): Promise<ArticleTile[]> {
    const articles = await this.getArticles(filters);
    return articles.map((a) => ({
      wpPostId: a.wpPostId,
      slug: a.slug,
      pathname: a.pathname,
      title: a.title,
      published: a.published,
      featuredImage: a.featuredImage,
      primarySubject: a.taxonomyPrimarySubject,
    }));
  }

  // ============================================
  // Authors
  // ============================================

  async getAuthorBySlug(slug: string): Promise<Author | null> {
    return this.data.authors?.find((a) => a.slug === slug) ?? null;
  }

  async getAuthorById(id: number): Promise<Author | null> {
    return this.data.authors?.find((a) => a.wpId === id) ?? null;
  }

  async getAuthors(_filters?: AuthorFilters): Promise<Author[]> {
    return this.data.authors ?? [];
  }

  // ============================================
  // Pages
  // ============================================

  async getHomepage(_options?: PageFilters): Promise<Homepage | null> {
    return this.data.homepage ?? null;
  }

  async getEditorialHub(
    slug: string,
    _options?: PageFilters
  ): Promise<EditorialHub | null> {
    return this.data.editorialHubs?.find((h) => h.slug === slug) ?? null;
  }

  async getGeneralPage(
    slug: string,
    _options?: PageFilters
  ): Promise<GeneralPage | null> {
    return this.data.generalPages?.find((p) => p.slug === slug) ?? null;
  }

  // ============================================
  // Cards
  // ============================================

  async getFeaturedCard(): Promise<FeaturedCard | null> {
    return this.data.featuredCard ?? null;
  }

  async getTopOffers(): Promise<TopOffers | null> {
    return this.data.topOffers ?? null;
  }
}
