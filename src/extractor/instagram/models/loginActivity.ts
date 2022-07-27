import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class LoginActivity extends InstagramBaseModel {
  cookie_name?: TextTableValue;

  ip_address?: TextTableValue;

  language_code?: TextTableValue;

  time?: DateTableValue;

  user_agent?: TextTableValue;

  constructor(values: { [key: string]: string }) {
    super();
    this.cookie_name = new TextTableValue(values.cookie_name);
    this.ip_address = new TextTableValue(values.ip_address);
    this.language_code = new TextTableValue(values.language_code);
    this.time = new DateTableValue(values.time);
    this.user_agent = new TextTableValue(values.user_agent);
  }
}
