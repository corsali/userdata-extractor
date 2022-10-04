import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class Pokes extends FacebookBaseModel {
  poker?: TextTableValue;

  pokee?: TextTableValue;

  rank?: IntegerTableValue;

  date_poked?: DateTableValue;

  constructor(poker: string, pokee: string, rank: number, datePoked: number) {
    super();
    this.poker = new TextTableValue(poker);
    this.pokee = new TextTableValue(pokee);
    this.rank = new IntegerTableValue(rank);
    this.date_poked = new DateTableValue(datePoked);
  }
}
