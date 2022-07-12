import { BoolItem, DateItem, TextItem } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PersonalInformation extends InstagramBaseModel {
  email?: TextItem;

  phone_confirmed?: BoolItem;

  has_shared_live_video?: BoolItem;

  username?: TextItem;

  name?: TextItem;

  bio?: TextItem;

  gender?: TextItem;

  website?: TextItem;

  private_account?: BoolItem;

  date_of_birth?: DateItem;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.email = new TextItem(valueMap.email);
    this.phone_confirmed = new BoolItem(valueMap.phone_confirmed);
    this.has_shared_live_video = new BoolItem(valueMap.has_shared_live_video);
    this.username = new TextItem(valueMap.username);
    this.name = new TextItem(valueMap.name);
    this.bio = new TextItem(valueMap.bio);
    this.gender = new TextItem(valueMap.gender);
    this.website = new TextItem(valueMap.website);
    this.private_account = new BoolItem(valueMap.private_account);
    this.date_of_birth = new DateItem(valueMap.date_of_birth);
  }
}
