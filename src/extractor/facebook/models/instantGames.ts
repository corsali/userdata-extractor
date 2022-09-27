import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class InstantGames extends FacebookBaseModel {
  game_name?: TextTableValue;

  date_added?: DateTableValue;

  user_app_scoped_id?: IntegerTableValue;

  category?: TextTableValue;

  constructor(values: {
    gameName: string;
    dateAdded: number;
    userAppScopedId: number;
    category: string;
  }) {
    super();
    this.game_name = new TextTableValue(values.gameName);
    this.date_added = new DateTableValue(values.dateAdded);
    this.user_app_scoped_id = new IntegerTableValue(values.userAppScopedId);
    this.category = new TextTableValue(values.category);
  }
}
