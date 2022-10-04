import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FriendsYouSeeLess } from "../models/friendsYouSeeLess.js";

class FriendsYouSeeLessJson extends JsonExtractor {
  async process() {
    const friends = this.query(`$.friends_you_see_less_v2.*.entries.*`);

    const processedFriends = friends.map(
      (friend) =>
        new FriendsYouSeeLess(
          friend.data?.name,
          friend.timestamp,
          friend.data?.uri
        )
    );

    this.table.rows.push(...processedFriends);
  }
}

export const friendsYouSeeLessJson = new FriendsYouSeeLessJson(
  config.SERVICE_FACEBOOK,
  ".*/friends_you_see_less.json",
  "friends_you_see_less"
);
