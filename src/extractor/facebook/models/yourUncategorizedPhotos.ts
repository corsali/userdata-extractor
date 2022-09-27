import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel";

export class YourUncategorizedPhotos extends FacebookBaseModel {
  uri?: UrlTableValue;

  date_created?: DateTableValue;

  media_metadata?: JsonTableValue;

  description?: TextTableValue;

  constructor(values: {
    uri: string;
    dateCreated: number;
    mediaMetadata: object;
    description: string;
  }) {
    super();
    this.uri = new UrlTableValue(values.uri);
    this.date_created = new DateTableValue(values.dateCreated);
    this.media_metadata = new JsonTableValue(values.mediaMetadata);
    this.description = new TextTableValue(values.description);
  }
}
