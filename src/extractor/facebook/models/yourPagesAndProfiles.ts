import { TextTableValue, UrlTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourPagesAndProfiles extends FacebookBaseModel {
  page_name?: TextTableValue;

  page_url?: UrlTableValue;

  constructor(pageName: string, pageUrl: string) {
    super();
    this.page_name = new TextTableValue(pageName);
    this.page_url = new UrlTableValue(pageUrl);
  }
}
