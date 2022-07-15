import { DateTableValue, TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class LoginActivity extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  cookie_name?: TextTableValue;

  /**
   * Exists: JSON
   */
  ip_address?: TextTableValue;

  /**
   * Exists: JSON
   */
  language_code?: TextTableValue;

  /**
   * Exists: JSON
   */
  time?: DateTableValue;

  /**
   * Exists: JSON
   */
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
