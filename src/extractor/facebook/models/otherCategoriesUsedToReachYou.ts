import { TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class OtherCategoriesUsedToReachYou extends FacebookBaseModel {
  category_name?: TextTableValue;

  constructor(categoryName: string) {
    super();
    this.category_name = new TextTableValue(categoryName);
  }
}
