import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class EducationExperiences extends FacebookBaseModel {
  school_name?: TextTableValue;

  school_type?: TextTableValue;

  concentrations?: TextTableValue;

  graduated?: BoolTableValue;

  date_started?: DateTableValue;

  date_ended?: DateTableValue;

  date_added?: DateTableValue;

  constructor(values: {
    schoolName: string;
    schoolType: string;
    concentrations: string;
    graduated: string;
    dateStarted: number;
    dateEnded: number;
    dateAdded: number;
  }) {
    super();
    this.school_name = new TextTableValue(values.schoolName);
    this.school_type = new TextTableValue(values.schoolType);
    this.concentrations = new TextTableValue(values.concentrations);
    this.graduated = new BoolTableValue(values.graduated);
    this.date_started = new DateTableValue(values.dateStarted);
    this.date_ended = new DateTableValue(values.dateEnded);
    this.date_added = new DateTableValue(values.dateAdded);
  }
}
