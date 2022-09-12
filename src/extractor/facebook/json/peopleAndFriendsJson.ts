import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PeopleAndFriends } from "../models/peopleAndFriends.js";

class PeopleAndFriendsJson extends JsonExtractor {
  async process() {
    const peopleAndFriends = this.query(
      `$.people_interactions_v2.*.entries.*.data`
    );

    const processedPeopleAndFriends = peopleAndFriends.map(
      (person) => new PeopleAndFriends(person.name, person.uri)
    );

    this.table.rows.push(...processedPeopleAndFriends);
  }
}

export const peopleAndFriendsJson = new PeopleAndFriendsJson(
  config.SERVICE_FACEBOOK,
  ".*/people_and_friends.json",
  "people_and_friends"
);
