import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class FacebookWatch extends FacebookBaseModel {
  video_title?: TextTableValue;

  user_action?: TextTableValue;

  action_date?: DateTableValue;

  feedback_collection?: TextTableValue;

  constructor(values: {
    videoTitle: string;
    userAction: string;
    actionDate: number | Date;
    feedbackCollection: string;
  }) {
    super();
    this.video_title = new TextTableValue(values.videoTitle);
    this.user_action = new TextTableValue(values.userAction);
    this.action_date = new DateTableValue(values.actionDate);
    this.feedback_collection = new TextTableValue(values.feedbackCollection);
  }
}
