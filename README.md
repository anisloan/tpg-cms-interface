# @tpg-cms-interface

CMS Interface abstraction layer using **Hexagonal Architecture (Ports & Adapters)** pattern.

## Overview

A unified interface for evaluating different CMS platforms. Each CMS adapter implements the same `CMSInterface`, making it easy to compare platforms using identical data contracts.

- **Consistent API**: All adapters return the same typed entities
- **Type safety**: Full TypeScript support with types derived from existing Runway entities
- **Easy comparison**: Swap adapters to test different CMS implementations

## Quick Start

### 1. Implement Your Adapter

```typescript
// src/adapters/SanityAdapter.ts
import type { CMSInterface } from '../interfaces/CMSInterface';
import type { Article } from '../types';

export class SanityAdapter implements CMSInterface {
  constructor(private client: SanityClient) {}

  async getArticleBySlug(slug: string): Promise<Article | null> {
    const result = await this.client.fetch(
      `*[_type == "article" && slug.current == $slug][0]`,
      { slug }
    );
    return result ? this.transform(result) : null;
  }

  // ... other methods
}
```

### 2. Use Your Adapter

```typescript
import type { CMSInterface, Article } from '../types';
import { SanityAdapter } from './adapters/SanityAdapter';

const cms: CMSInterface = new SanityAdapter(config);

const article: Article | null = await cms.getArticleBySlug('best-credit-cards');
const author = await cms.getAuthorBySlug('brian-kelly');
const homepage = await cms.getHomepage();
```

## CMSInterface

The interface each adapter must implement:

```typescript
interface CMSInterface {
  // Articles
  getArticleBySlug(slug: string, options?: ArticleOptions): Promise<Article | null>;
  getArticleById(id: number, options?: ArticleOptions): Promise<Article | null>;
  getArticles(filters: ArticleFilters): Promise<Article[]>;
  getArticleTiles(filters: ArticleTileFilters): Promise<ArticleTile[]>;

  // Authors
  getAuthorBySlug(slug: string): Promise<Author | null>;
  getAuthorById(id: number): Promise<Author | null>;
  getAuthors(filters?: AuthorFilters): Promise<Author[]>;

  // Pages
  getHomepage(options?: PageFilters): Promise<Homepage | null>;
  getEditorialHub(slug: string, options?: PageFilters): Promise<EditorialHub | null>;
  getGeneralPage(slug: string, options?: PageFilters): Promise<GeneralPage | null>;

  // Cards
  getFeaturedCard(): Promise<FeaturedCard | null>;
  getTopOffers(): Promise<TopOffers | null>;
}
```

## Entity Types

Types match the Runway PHP entities exactly:

| TypeScript | PHP Entity |
|------------|------------|
| `Article` | `Article.php` |
| `Author` | `User.php` |
| `Homepage` | `Homepage.php` |
| `EditorialHub` | `EditorialHub.php` |
| `GeneralPage` | `GeneralPage.php` |
| `FeaturedCard` | `FeaturedCard.php` |
| `TopOffers` | `TopOffers.php` |
| `Image` | `Image.php` |

## Development

```bash
npm install   # Install dependencies
npm run build # Build
npm test      # Run tests
```
