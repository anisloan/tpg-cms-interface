/**
 * Adapter exports
 *
 * To create a new adapter:
 * 1. Create a new file (e.g., SanityAdapter.ts)
 * 2. Implement CMSInterface
 * 3. Export it here
 *
 * @example SanityAdapter.ts
 * ```typescript
 * import type { CMSInterface } from '../interfaces/CMSInterface';
 * import type { Article } from '../types';
 *
 * export class SanityAdapter implements CMSInterface {
 *   constructor(private client: SanityClient) {}
 *
 *   async getArticleBySlug(slug: string): Promise<Article | null> {
 *     const result = await this.client.fetch(
 *       `*[_type == "article" && slug.current == $slug][0]`,
 *       { slug }
 *     );
 *     return result ? this.transform(result) : null;
 *   }
 *
 *   // ... other methods
 * }
 * ```
 */

export { InMemoryAdapter } from "./InMemoryAdapter";
export type { InMemoryData } from "./InMemoryAdapter";

// Add your adapter export here:
// export { SanityAdapter } from './SanityAdapter';
// export { PayloadAdapter } from './PayloadAdapter';
