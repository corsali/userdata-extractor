import { TextTableValue } from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

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
