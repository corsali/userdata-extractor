import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { FundraisersCreated } from "../models/fundraisersCreated.js";

class FundraisersCreatedJson extends JsonExtractor {
  async process() {
    const fundraisers = this.query(`$.fundraisers_created_v2.*`);

    fundraisers.forEach((fundraiserData) => {
      fundraiserData.attachments?.forEach((attachment) => {
        attachment?.data?.forEach((data) => {
          this.table.rows.push(
            new FundraisersCreated({
              fundraiserTitle: data?.fundraiser?.title,
              dateStarted: data?.fundraiser?.start_timestamp,
              dateEnded: data?.fundraiser?.end_timestamp,
              dateCreated: fundraiserData.timestamp,
              goalAmount: data?.fundraiser?.goal_amount,
              raisedAmount: data?.fundraiser?.raised_amount,
              donatedAmount: data?.fundraiser?.donated_amount,
              actionTitle: fundraiserData.title,
            })
          );
        });
      });
    });
  }
}

export const fundraiserCreatedJson = new FundraisersCreatedJson(
  config.SERVICE_FACEBOOK,
  ".*/fundraisers_created.json",
  "fundraisers_created"
);
