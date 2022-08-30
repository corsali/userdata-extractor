import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { CloseFriends } from "../models/closeFriends.js";

class CloseFriendsJson extends JsonExtractor {
  async process() {
    const closeFriends = this.query(
      `$.relationships_close_friends[*].string_list_data`
    );

    const processedCloseFriends = closeFriends.map(
      (closeFriend) =>
        new CloseFriends({
          name: closeFriend[0].value,
          profileUrl: closeFriend[0].href,
          dateBefriended: closeFriend[0].timestamp,
        })
    );

    this.table.rows.push(...processedCloseFriends);
  }
}

export const closeFriendsJson = new CloseFriendsJson(
  config.SERVICE_INSTAGRAM,
  ".*/close_friends.json",
  "close_friends"
);
