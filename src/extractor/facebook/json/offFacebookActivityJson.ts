import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { OffFacebookActivity } from "../models/offFacebookActivity.js";

class OffFacebookActivityJson extends JsonExtractor {
  async process() {
    const offFacebookActivity = this.query(`$.off_facebook_activity_v2.*`);

    const processedOffFacebookActivity = offFacebookActivity.flatMap(
      (activities) =>
        activities.events?.map(
          (activity?: { id: number; type: string; timestamp: number }) =>
            new OffFacebookActivity({
              activityName: activities.name,
              activityId: activity.id?.toString?.(),
              activityType: activity?.type,
              dateOccured: activity?.timestamp,
            })
        ) ?? []
    );

    this.table.rows.push(...processedOffFacebookActivity);
  }
}

export const offFacebookActivityJson = new OffFacebookActivityJson(
  config.SERVICE_FACEBOOK,
  ".*/your_off-facebook_activity.json",
  "off_facebook_activity"
);
