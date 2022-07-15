import { BoolTableValue, TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class AdvertisersUsingYourActivityOrInformation extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  advertiser_name?: TextTableValue;

  /**
   * Exists: JSON
   */
  has_data_file_custom_audience?: BoolTableValue;

  /**
   * Exists: JSON
   */
  has_in_person_store_visit?: BoolTableValue;

  /**
   * Exists: JSON
   */
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
