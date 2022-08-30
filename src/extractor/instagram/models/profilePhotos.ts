import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ProfilePhotos extends InstagramBaseModel {
  uri?: UrlTableValue;

  created?: DateTableValue;

  title?: TextTableValue;

  isProfilePicture?: BoolTableValue;

  constructor(valueMap: {
    uri: string;
    created: number;
    title: string;
    isProfilePicture: boolean;
  }) {
    super();
    this.uri = new UrlTableValue(valueMap.uri);
    this.created = new DateTableValue(valueMap.created);
    this.title = new TextTableValue(valueMap.title);
    this.isProfilePicture = new BoolTableValue(valueMap.isProfilePicture);
  }
}
