import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PeopleWhoFollowYou } from "../models/peopleWhoFollowYou.js";

class PeopleWhoFollowYouJson extends JsonExtractor {
  async process() {
    const friends = this.query(`$.followers_v2.*.name`);

    const processedFriends = friends.map(
      (friend) => new PeopleWhoFollowYou(friend)
    );

    this.table.rows.push(...processedFriends);
  }
}

export const peopleWhoFollowYouJson = new PeopleWhoFollowYouJson(
  config.SERVICE_FACEBOOK,
  ".*/people_who_follow_you.json",
  "people_who_follow_you"
);
