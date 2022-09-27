import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Relationships extends FacebookBaseModel {
  person_name?: TextTableValue;

  relationship_type?: TextTableValue;

  date_added?: DateTableValue;

  anniversary_date?: DateTableValue;

  constructor(
    relationshipType: string,
    personName: string,
    dateAdded: number,
    anniversaryDate?: number | Date
  ) {
    super();
    this.person_name = new TextTableValue(personName);
    this.relationship_type = new TextTableValue(relationshipType);
    this.date_added = new DateTableValue(dateAdded);
    this.anniversary_date = new DateTableValue(anniversaryDate);
  }
}
