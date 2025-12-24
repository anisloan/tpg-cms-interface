/**
 * Card/Credit Card entity types
 * Derived from tpg-runway/wp-content/themes/tpg-runway/entities/
 */

/**
 * Featured card entity
 * Matches FeaturedCard.php constructor exactly
 */
export interface FeaturedCard {
  /** Card PID (product ID) - null if no global takeover */
  id: number | null;

  /** Whether global takeover is enabled */
  hasGlobalTakeover: boolean;
}

/**
 * Top offers entity
 * Matches TopOffers.php constructor exactly
 */
export interface TopOffers {
  /** Array of card PIDs in order */
  ids: number[];

  /** Number of offers */
  count: number;
}
