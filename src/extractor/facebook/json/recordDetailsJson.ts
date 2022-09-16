import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { RecordDetails } from "../models/recordDetails.js";

class RecordDetailsJson extends JsonExtractor {
  async process() {
    const recordDetails = this.query(`$.admin_records_v2.*`);

    const processedRecordDetails = recordDetails.map(
      (recordDetail) =>
        new RecordDetails({
          eventName: recordDetail.event,
          dateSessionCreated: recordDetail.session?.created_timestamp,
          sessionIpAddress: recordDetail.session?.ip_address,
          sessionUserAgent: recordDetail.session?.user_agent,
          sessionCookie: recordDetail.session?.datr_cookie,
        })
    );

    this.table.rows.push(...processedRecordDetails);
  }
}

export const recordDetailsJson = new RecordDetailsJson(
  config.SERVICE_FACEBOOK,
  ".*/record_details.json",
  "record_details"
);
