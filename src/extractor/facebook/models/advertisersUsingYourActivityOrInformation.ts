import { BoolTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AdvertisersUsingYourActivityOrInformation extends FacebookBaseModel {
  advertiser_name?: TextTableValue;

  has_data_file_custom_audience?: BoolTableValue;

  has_remarketing_custom_audience?: BoolTableValue;

  has_in_person_store_visit?: BoolTableValue;

  constructor(values: {
    advertiserName: string;
    hasDataFileCustomAudience: boolean;
    hasRemarketingCustomAudience: boolean;
    hasInPersonStoreVisit: boolean;
  }) {
    super();
    this.advertiser_name = new TextTableValue(values.advertiserName);
    this.has_data_file_custom_audience = new BoolTableValue(
      values.hasDataFileCustomAudience
    );
    this.has_remarketing_custom_audience = new BoolTableValue(
      values.hasRemarketingCustomAudience
    );
    this.has_in_person_store_visit = new BoolTableValue(
      values.hasInPersonStoreVisit
    );
  }
}
