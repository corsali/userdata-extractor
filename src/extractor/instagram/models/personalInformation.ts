import {
  BoolTableValue,
  DateTableValue,
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PersonalInformation extends InstagramBaseModel {
  /**
   * Exists: JSON, HTML
   */
  bio?: TextTableValue;

  /**
   * Exists: JSON, HTML
   */
  date_of_birth?: DateTableValue;

  /**
   * Exists: JSON
   */
  email?: TextTableValue;

  /**
   * Exists: JSON, HTML
   */
  gender?: TextTableValue;

  /**
   * Exists: HTML
   */
  has_shared_live_video?: BoolTableValue;

  /**
   * Exists: JSON, HTML
   */
  name?: TextTableValue;

  /**
   * Exists: JSON
   */
  phone_confirmation_method?: TextTableValue;

  /**
   * Exists: JSON
   */
  phone_confirmed?: BoolTableValue;

  /**
   * Exists: JSON
   */
  phone_number?: PhoneNumberValue;

  /**
   * Exists: JSON, HTML
   */
  private_account?: BoolTableValue;

  /**
   * Exists: JSON
   */
  profile_photo?: UrlTableValue;

  /**
   * Exists: JSON, HTML
   */
  username?: TextTableValue;

  /**
   * Exists: HTML
   */
  website?: TextTableValue;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.bio = new TextTableValue(valueMap.bio);
    this.date_of_birth = new DateTableValue(valueMap.date_of_birth);
    this.email = new EmailTableValue(valueMap.email);
    this.gender = new TextTableValue(valueMap.gender);
    this.has_shared_live_video = new BoolTableValue(
      valueMap.has_shared_live_video
    );
    this.name = new TextTableValue(valueMap.name);
    this.phone_confirmation_method = new TextTableValue(
      valueMap.phone_confirmation_method
    );
    this.phone_confirmed = new BoolTableValue(valueMap.phone_confirmed);
    this.phone_number = new PhoneNumberValue(valueMap.phone_number);
    this.private_account = new BoolTableValue(valueMap.private_account);
    this.profile_photo = new UrlTableValue(valueMap.profile_photo);
    this.username = new TextTableValue(valueMap.username);
    this.website = new UrlTableValue(valueMap.website);
  }
}
