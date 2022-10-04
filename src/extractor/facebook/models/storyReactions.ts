import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class StoryReactions extends FacebookBaseModel {
  reaction_title?: TextTableValue;

  date_reacted?: DateTableValue;

  attachments?: JsonTableValue;

  constructor(reactionTitle: string, dateReacted: number, attachments: object) {
    super();
    this.reaction_title = new TextTableValue(reactionTitle);
    this.date_reacted = new DateTableValue(dateReacted);
    this.attachments = new JsonTableValue(attachments);
  }
}
