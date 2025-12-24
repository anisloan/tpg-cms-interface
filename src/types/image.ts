/**
 * Image entity type
 * Derived from tpg-runway/wp-content/themes/tpg-runway/entities/Image.php
 */

/**
 * Crop offset percentages for image cropping
 */
export interface CropOffsetPercentage {
  x: number;
  y: number;
}

/**
 * Image entity
 * Matches Image.php constructor exactly
 */
export interface Image {
  /** Attachment ID */
  id: number;

  /** Image source URL */
  src: string;

  /** Alt text for accessibility */
  altText: string;

  /** Image width in pixels */
  width: number;

  /** Image height in pixels */
  height: number;

  /** Image title */
  title: string;

  /** Image caption */
  caption: string;

  /** Image description */
  description: string;

  /** MIME type (e.g., 'image/jpeg') */
  postMimeType: string;

  /** Photo credit attribution */
  credit: string;

  /** Crop offset percentages */
  cropOffsetPercentage: CropOffsetPercentage;

  /** Whether width and height are set */
  hasDimensions: boolean;

  /** Width / height ratio */
  aspectRatio: number;

  /** Width > height */
  isLandscape: boolean;

  /** Height > width */
  isPortrait: boolean;

  /** Width === height */
  isSquare: boolean;

  /** Available image sizes (optional) */
  sizes: Record<string, string> | null;
}

/**
 * Social media image thumbnails
 */
export interface SocialThumbnails {
  facebook: string | null;
  twitter: string | null;
}
