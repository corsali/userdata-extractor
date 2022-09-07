import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class YourAddressBooks extends FacebookBaseModel {
  contact_name?: TextTableValue;

  contact_point?: TextTableValue;

  date_created?: DateTableValue;

  date_updated?: DateTableValue;

  constructor(values: {
    contactName?: string;
    contactPoint?: string;
    dateCreated?: number;
    dateUpdated?: number;
  }) {
    super();
    this.contact_name = new TextTableValue(values.contactName);
    this.contact_point = new TextTableValue(values.contactPoint);
    this.date_created = new DateTableValue(values.dateCreated);
    this.date_updated = new DateTableValue(values.dateUpdated);
  }
}
