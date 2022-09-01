import {
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class LinkedMetaAccounts extends InstagramBaseModel {
  account_type?: TextTableValue;

  username?: TextTableValue;

  identifier?: TextTableValue;

  email?: EmailTableValue;

  phone_number?: PhoneNumberValue;

  constructor(values: {
    accountType: string;
    username: string;
    identifier: string;
    email: string;
    phone: string;
  }) {
    super();
    this.account_type = new TextTableValue(values.accountType);
    this.username = new TextTableValue(values.username);
    this.identifier = new TextTableValue(values.identifier);
    this.email = new EmailTableValue(values.email);
    this.phone_number = new PhoneNumberValue(values.phone);
  }
}
