import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class StoryStickerInteractions extends InstagramBaseModel {
  title?: TextTableValue;

  date_created?: DateTableValue;

  interaction_type?: TextTableValue;

  constructor(title: string, dateCreated: number, interactionType: string) {
    super();
    this.title = new TextTableValue(title);
    this.date_created = new DateTableValue(dateCreated);
    this.interaction_type = new TextTableValue(interactionType);
  }
}
