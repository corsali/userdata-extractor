import { BoolTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AdvertisersUsingYourActivityOrInformation extends InstagramBaseModel {
  advertiser_name?: TextTableValue;

  has_data_file_custom_audience?: BoolTableValue;

  has_in_person_store_visit?: BoolTableValue;

  has_remarketing_custom_audience?: BoolTableValue;

  constructor(valueMap: { [key: string]: string | boolean }) {
    super();
    this.advertiser_name = new TextTableValue(
      valueMap.advertiser_name as string
    );
    this.has_data_file_custom_audience = new BoolTableValue(
      valueMap.has_data_file_custom_audience as boolean
    );
    this.has_in_person_store_visit = new BoolTableValue(
      valueMap.has_in_person_store_visit as boolean
    );
    this.has_remarketing_custom_audience = new BoolTableValue(
      valueMap.has_remarketing_custom_audience as boolean
    );
  }
}
