import { DateTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class RecentMarketplaceVisits extends FacebookBaseModel {
  date_visited?: DateTableValue;

  constructor(dateVisited: number | string) {
    super();
    this.date_visited = new DateTableValue(dateVisited);
  }
}
