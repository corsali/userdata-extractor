import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class ArchivedStories extends FacebookBaseModel {
  story_title?: TextTableValue;

  date_added?: DateTableValue;

  attachments?: JsonTableValue;

  data?: JsonTableValue;

  attachment_descriptions?: TextTableValue;

  constructor(values: {
    storyTitle: string;
    dateAdded: number;
    attachments: object;
    data: object;
    attachmentDescriptions: string;
  }) {
    super();
    this.story_title = new TextTableValue(values.storyTitle);
    this.date_added = new DateTableValue(values.dateAdded);
    this.attachments = new JsonTableValue(values.attachments);
    this.data = new JsonTableValue(values.data);
    this.attachment_descriptions = new TextTableValue(
      values.attachmentDescriptions
    );
  }
}
