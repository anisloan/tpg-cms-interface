/**
 * Author/User entity type
 * Derived from tpg-runway/wp-content/themes/tpg-runway/entities/User.php
 */

import { Image } from "./image";

/**
 * Travel statistics for author profile
 * Derived from User.php TravelStats type
 */
export interface TravelStats {
  countriesVisited: number | null;
  statesVisited: number | null;
  flightsTaken: number | null;
  milesFlown: number | null;
  hotelNights: number | null;
}

/**
 * How I Earn Points To Travel item
 * Derived from User.php HowIEarnPointsToTravelItem type
 */
export interface HowIEarnPointsToTravelItem {
  icon: string | null;
  description: string | null;
}

/**
 * Author entity - represents a TPG author/user
 * Full entity used for author pages
 */
export interface Author {
  /** WordPress user ID */
  wpId: number;

  /** URL-friendly slug */
  slug: string;

  /** Display name */
  name: string;

  /** First name */
  firstName: string;

  /** Last name */
  lastName: string;

  /** Avatar image */
  avatar: Image | null;

  /** Short biography */
  bio: string | null;

  /** Education and expertise list */
  educationAndExpertise: string[];

  /** Public email address */
  email: string | null;

  /** Facebook profile URL */
  facebook: string | null;

  /** Favorite story slugs */
  favoriteStories: string[];

  /** Featured video header text */
  featuredVidHeader: string | null;

  /** Featured video ID (YouTube) */
  featuredVidId: string | null;

  /** Full biography (extended) */
  fullBio: string | null;

  /** How author earns points to travel */
  howIEarnPointsToTravel: HowIEarnPointsToTravelItem[] | null;

  /** Instagram handle */
  instagram: string | null;

  /** LinkedIn profile URL */
  linkedin: string | null;

  /** TikTok handle */
  tiktok: string | null;

  /** Job title */
  title: string | null;

  /** Year joined TPG */
  tpgSince: string | null;

  /** Travel statistics */
  travelStats: TravelStats | null;

  /** Travel tip text */
  travelTip: string | null;

  /** Twitter/X handle */
  twitter: string | null;
}

/**
 * Filters for querying authors
 */
export interface AuthorFilters {
  /** Filter by slug */
  slug?: string;

  /** Filter by ID */
  id?: number;

  /** Pagination limit */
  limit?: number;

  /** Pagination offset */
  offset?: number;
}
