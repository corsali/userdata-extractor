import {
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class AccountsReached extends InstagramBaseModel {
  date_range_from?: TextTableValue;

  date_range_to?: TextTableValue;

  accounts_reached?: IntegerTableValue;

  accounts_reached_delta?: TextTableValue;

  followers?: IntegerTableValue;

  non_followers?: IntegerTableValue;

  impressions?: IntegerTableValue;

  impressions_delta?: TextTableValue;

  profile_visits?: IntegerTableValue;

  profile_visits_delta?: TextTableValue;

  email_button_taps?: IntegerTableValue;

  email_button_taps_delta?: TextTableValue;

  constructor(values: {
    dateRangeFrom: string;
    dateRangeTo: string;
    accountsReached: string | number;
    accountsReachedDelta: string;
    followers: string | number;
    nonFollowers: string | number;
    impressions: string | number;
    impressionsDelta: string;
    profileVisits: string | number;
    profileVisitsDelta: string;
    emailButtonTaps: string | number;
    emailButtonTapsDelta: string;
  }) {
    super();
    this.date_range_from = new TextTableValue(values.dateRangeFrom);
    this.date_range_to = new TextTableValue(values.dateRangeTo);
    this.accounts_reached = new IntegerTableValue(values.accountsReached);
    this.accounts_reached_delta = new TextTableValue(
      values.accountsReachedDelta
    );
    this.followers = new IntegerTableValue(values.followers);
    this.non_followers = new IntegerTableValue(values.nonFollowers);
    this.impressions = new IntegerTableValue(values.impressions);
    this.impressions_delta = new TextTableValue(values.impressionsDelta);
    this.profile_visits = new IntegerTableValue(values.profileVisits);
    this.profile_visits_delta = new TextTableValue(values.profileVisitsDelta);
    this.email_button_taps = new IntegerTableValue(values.emailButtonTaps);
    this.email_button_taps_delta = new TextTableValue(
      values.emailButtonTapsDelta
    );
  }
}
