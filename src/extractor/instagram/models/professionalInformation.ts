import { TextTableValue } from "../../../models/table";
import { InstagramBaseModel } from "./instagramBaseModel";

export class ProfessionalInformation extends InstagramBaseModel {
  /**
   *
   * TODO: Get example, no information about model yet
   */
  dummy: TextTableValue;

  // eslint-disable-next-line no-useless-constructor
  constructor(dummy: string) {
    super();
    this.dummy = new TextTableValue(dummy);
  }
}
