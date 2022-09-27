import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { BuyerAndSellerRatings } from "../models/buyerAndSellerRatings.js";

class BuyerAndSellerRatingsJson extends JsonExtractor {
  async process() {
    const marketplaceRatings = this.query(`$.ratings_v2.*`);

    const processedMarketplaceRatings = marketplaceRatings.map(
      (marketplaceRating) =>
        new BuyerAndSellerRatings({
          dateRated: marketplaceRating.timestamp,
          ratingTitle: marketplaceRating.title,
          itemName: marketplaceRating.data?.[0]?.text,
          attachments: marketplaceRating.attachments,
        })
    );

    this.table.rows.push(...processedMarketplaceRatings);
  }
}

export const buyerAndSellerRatingsJson = new BuyerAndSellerRatingsJson(
  config.SERVICE_FACEBOOK,
  ".*/buyer_and_seller_ratings.json",
  "buyer_and_seller_ratings"
);
