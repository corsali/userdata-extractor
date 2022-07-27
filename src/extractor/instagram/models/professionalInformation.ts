import { EmailTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ProfessionalInformation extends InstagramBaseModel {
  email?: EmailTableValue;

  constructor(valueMap: { [key: string]: string }) {
    super();
    this.email = new EmailTableValue(valueMap.email);
  }
}
