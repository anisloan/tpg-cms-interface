/**
 * @tpg/cms-interface
 *
 * CMS Interface abstraction layer using Hexagonal Architecture (Ports & Adapters).
 *
 * Usage:
 * ```typescript
 * import type { CMSInterface, Article } from '@tpg/cms-interface';
 * import { SanityAdapter } from './adapters/SanityAdapter';
 *
 * const cms: CMSInterface = new SanityAdapter(config);
 * const article: Article | null = await cms.getArticleBySlug('my-article');
 * ```
 *
 * @packageDocumentation
 */

// Types
export * from "./types";

// Interface (Port)
export type { CMSInterface } from "./interfaces";

// Adapters
export { InMemoryAdapter } from "./adapters";
export type { InMemoryData } from "./adapters";
