import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { AdvertisersUsingYourActivityOrInformation as Advertisers } from "../models/advertisersUsingYourActivityOrInformation";

class AdvertisersUsingYourActivityOrInformationJson extends JsonExtractor {
  async process() {
    const customAudiences = this.query(`$.custom_audiences_all_types_v2.*`);

    const processedCustomAudiences = customAudiences.map(
      (customAudience) =>
        new Advertisers({
          advertiserName: customAudience.advertiser_name,
          hasDataFileCustomAudience:
            customAudience.has_data_file_custom_audience,
          hasRemarketingCustomAudience:
            customAudience.has_remarketing_custom_audience,
          hasInPersonStoreVisit: customAudience.has_in_person_store_visit,
        })
    );

    this.table.rows.push(...processedCustomAudiences);
  }
}

export const advertisersUsingYourActivityOrInformationJson =
  new AdvertisersUsingYourActivityOrInformationJson(
    config.SERVICE_FACEBOOK,
    ".*/advertisers_using_your_activity_or_information.json",
    "advertisers_using_your_activity_or_information"
  );
