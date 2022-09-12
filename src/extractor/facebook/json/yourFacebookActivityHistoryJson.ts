import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourFacebookActivityHistory } from "../models/yourFacebookActivityHistory.js";

class YourFacebookActivityHistoryJson extends JsonExtractor {
  async process() {
    const facebookActivityHistory = this.query(
      `$.last_activity_v2.last_activity_time`
    )[0];

    Object.entries(facebookActivityHistory).forEach(
      ([appName, activityTimesArg]: [
        string,
        { activity_by_day: number[] }
      ]) => {
        const activityTimes = activityTimesArg?.activity_by_day ?? [null];
        activityTimes.forEach((activityTime: number) => {
          this.table.rows.push(
            new YourFacebookActivityHistory(activityTime, appName)
          );
        });
      }
    );
  }
}

export const yourFacebookActivityHistoryJson =
  new YourFacebookActivityHistoryJson(
    config.SERVICE_FACEBOOK,
    ".*/your_facebook_activity_history.json",
    "your_facebook_activity_history"
  );
