import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { InformationSubmittedToAdvertisers as Information } from "../models/informationSubmittedToAdvertisers.js";

class InformationSubmittedToAdvertisersJson extends JsonExtractor {
  async process() {
    const submittedInformation = this.query(`$.lead_gen_info_v2.*`);

    const processedSubmittedInformation = submittedInformation.map(
      ({ label, value }) => new Information(label, value)
    );

    this.table.rows.push(...processedSubmittedInformation);
  }
}

export const informationSubmittedToAdvertisersJson =
  new InformationSubmittedToAdvertisersJson(
    config.SERVICE_FACEBOOK,
    ".*/information_you've_submitted_to_advertisers.json",
    "information_submitted_to_advertisers"
  );
