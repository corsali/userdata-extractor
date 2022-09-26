import { EmailTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel";

export class PossibleEmails extends InstagramBaseModel {
  email?: EmailTableValue;

  constructor(email: string) {
    super();
    this.email = new EmailTableValue(email);
  }
}
