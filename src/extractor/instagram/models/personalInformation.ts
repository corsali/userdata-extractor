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
  bio?: TextTableValue;

  date_of_birth?: DateTableValue;

  email?: TextTableValue;

  gender?: TextTableValue;

  has_shared_live_video?: BoolTableValue;

  name?: TextTableValue;

  phone_confirmation_method?: TextTableValue;

  phone_confirmed?: BoolTableValue;

  phone_number?: PhoneNumberValue;

  private_account?: BoolTableValue;

  profile_photo?: UrlTableValue;

  username?: TextTableValue;

  website?: TextTableValue;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.bio = new TextTableValue(valueMap.bio);
    this.date_of_birth = new DateTableValue(valueMap.date_of_birth);
    this.email = new EmailTableValue(valueMap.email || valueMap.email_address);
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
