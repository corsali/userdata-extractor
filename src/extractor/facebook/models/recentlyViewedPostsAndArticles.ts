import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentlyViewedPostsAndArticles extends FacebookBaseModel {
  post_name?: TextTableValue;

  post_type?: TextTableValue;

  date_posted?: DateTableValue;

  post_uri: UrlTableValue;

  share_link?: UrlTableValue;

  constructor(values: {
    postName: string;
    postType: string;
    datePosted: number;
    postUri: string;
    shareLink?: string;
  }) {
    super();
    this.post_name = new TextTableValue(values.postName);
    this.post_type = new TextTableValue(values.postType);
    this.date_posted = new DateTableValue(values.datePosted);
    this.post_uri = new UrlTableValue(values.postUri);
    this.share_link = new UrlTableValue(values.shareLink);
  }
}
