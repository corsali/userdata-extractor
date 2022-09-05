import {
  DateTableValue,
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class RegistrationInfo extends InstagramBaseModel {
  username?: TextTableValue;

  ip_address?: TextTableValue;

  time?: DateTableValue;

  email?: EmailTableValue;

  phone_number?: PhoneNumberValue;

  device?: TextTableValue;

  constructor(values: {
    username: string;
    ipAddress: string;
    time: string;
    email: string;
    phoneNumber: string;
    device: string;
  }) {
    super();
    this.username = new TextTableValue(values.username);
    this.ip_address = new TextTableValue(values.ipAddress);
    this.time = new DateTableValue(values.time);
    this.email = new EmailTableValue(values.email);
    this.phone_number = new PhoneNumberValue(values.phoneNumber);
    this.device = new TextTableValue(values.device);
  }
}
