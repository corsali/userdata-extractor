import { PhoneNumberValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class PossiblePhoneNumbers extends InstagramBaseModel {
  phone_number?: PhoneNumberValue;

  constructor(phoneNumber: string) {
    super();
    this.phone_number = new PhoneNumberValue(phoneNumber);
  }
}
