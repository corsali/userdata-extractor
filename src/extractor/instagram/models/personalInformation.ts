import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PersonalInformation extends InstagramBaseModel {
  email?: TextTableValue;

  phone_confirmed?: BoolTableValue;

  has_shared_live_video?: BoolTableValue;

  username?: TextTableValue;

  name?: TextTableValue;

  bio?: TextTableValue;

  gender?: TextTableValue;

  website?: TextTableValue;

  private_account?: BoolTableValue;

  date_of_birth?: DateTableValue;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.email = new TextTableValue(valueMap.email);
    this.phone_confirmed = new BoolTableValue(valueMap.phone_confirmed);
    this.has_shared_live_video = new BoolTableValue(
      valueMap.has_shared_live_video
    );
    this.username = new TextTableValue(valueMap.username);
    this.name = new TextTableValue(valueMap.name);
    this.bio = new TextTableValue(valueMap.bio);
    this.gender = new TextTableValue(valueMap.gender);
    this.website = new TextTableValue(valueMap.website);
    this.private_account = new BoolTableValue(valueMap.private_account);
    this.date_of_birth = new DateTableValue(valueMap.date_of_birth);
  }
}
