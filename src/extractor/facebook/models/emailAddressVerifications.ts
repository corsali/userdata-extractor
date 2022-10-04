import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class EmailAddressVerifications extends FacebookBaseModel {
  contact?: TextTableValue;

  // @todo Unsure about interpretation of this number, maybe HTML export would
  // help. Probably 1 - phone, 2-email.
  contact_type?: IntegerTableValue;

  verification_time?: DateTableValue;

  constructor(contact: string, contactType: number, verificationTime: number) {
    super();
    this.contact = new TextTableValue(contact);
    this.contact_type = new IntegerTableValue(contactType);
    this.verification_time = new DateTableValue(verificationTime);
  }
}
