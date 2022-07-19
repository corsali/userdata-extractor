import {
  ColumnTableValue,
  DateTableValue,
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
  UrlTableValue,
} from "../../../models/table/index.js";
import { logger } from "../../../utils/logger.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ProfileChanges extends InstagramBaseModel {
  /**
   * Exists: JSON
   */
  changed?: ColumnTableValue;

  /**
   * Exists: JSON
   */
  previous_value?: ColumnTableValue;

  /**
   * Exists: JSON
   */
  new_value?: ColumnTableValue;

  /**
   * Exists: JSON
   */
  change_date?: DateTableValue;

  static selectValueTypeFromKey(key: string, value: any) {
    switch (key) {
      // Text values
      case "Profile Bio Text":
      case "Profile Name":
      case "Username":
        return new TextTableValue(value);
      // Email
      case "Email":
        return new EmailTableValue(value);
      // Phone
      case "Phone Number":
        return new PhoneNumberValue(value);
      // URL
      case "Profile Bio Link":
        return new UrlTableValue(value);
      // Fallback
      default:
        logger.warn(
          `Profile Changes -- Unknown key "${key}" with value "${value}"`
        );
        return new ColumnTableValue(value);
    }
  }

  constructor(valueMap: {
    changed: string;
    previous_value: string;
    new_value: string;
    change_date: number;
  }) {
    super();
    this.changed = new TextTableValue(valueMap.changed);
    this.previous_value = ProfileChanges.selectValueTypeFromKey(
      valueMap.changed,
      valueMap.previous_value
    );
    this.new_value = ProfileChanges.selectValueTypeFromKey(
      valueMap.changed,
      valueMap.new_value
    );
    this.change_date = new DateTableValue(valueMap.change_date);
  }
}
