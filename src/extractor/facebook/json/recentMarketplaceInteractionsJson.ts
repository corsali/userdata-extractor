import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecentMarketplaceInteractions } from "../models/recentMarketplaceInteractions.js";

class RecentMarketplaceInteractionsJson extends JsonExtractor {
  async process() {
    const marketplaceInteractions = this.query(
      `$.recently_viewed[?(@.name=='Marketplace Interactions')].children[?(@.name!='Marketplace Items')]`
    );

    marketplaceInteractions.forEach((interactions) => {
      interactions?.entries?.forEach(
        (interactionDateObj: { data: { value: string } }) => {
          this.table.rows.push(
            new RecentMarketplaceInteractions(
              interactions.name,
              interactions.description,
              interactionDateObj.data.value
            )
          );
        }
      );
    });
  }
}

export const recentMarketplaceInteractionsJson =
  new RecentMarketplaceInteractionsJson(
    config.SERVICE_FACEBOOK,
    ".*/recently_viewed.json",
    "recent_marketplace_interactions"
  );
