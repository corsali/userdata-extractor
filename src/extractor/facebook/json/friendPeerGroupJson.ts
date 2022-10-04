import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FriendPeerGroup } from "../models/friendPeerGroup.js";

class FriendPeerGroupJson extends JsonExtractor {
  async process() {
    const friendPeerGroup = this.query(`$.friend_peer_group_v2`)[0];

    this.table.rows.push(new FriendPeerGroup(friendPeerGroup));
  }
}

export const friendPeerGroupJson = new FriendPeerGroupJson(
  config.SERVICE_FACEBOOK,
  ".*/friend_peer_group.json",
  "friend_peer_group"
);
