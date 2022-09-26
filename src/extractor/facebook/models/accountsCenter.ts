import {
  DateTableValue,
  EmailTableValue,
  IntegerTableValue,
  PhoneNumberValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class AccountsCenter extends FacebookBaseModel {
  service_name?: TextTableValue;

  native_app_id?: IntegerTableValue;

  username?: TextTableValue;

  email?: EmailTableValue;

  phone_number?: PhoneNumberValue;

  full_name?: TextTableValue;

  date_linked?: DateTableValue;

  constructor(values: {
    serviceName: string;
    nativeAppId: number;
    username: string;
    email: string;
    phoneNumber: string;
    fullName: string;
    dateLinked: number;
  }) {
    super();
    this.service_name = new TextTableValue(values.serviceName);
    this.native_app_id = new IntegerTableValue(values.nativeAppId);
    this.username = new TextTableValue(values.username);
    this.email = new EmailTableValue(values.email);
    this.phone_number = new TextTableValue(values.phoneNumber);
    this.full_name = new TextTableValue(values.fullName);
    this.date_linked = new DateTableValue(values.dateLinked);
  }
}
