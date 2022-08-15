import config from "../../../config/index.js";
import { Table } from "../../../models/table/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PersonalInformation } from "../models/personalInformation.js";

class PersonalInformationJson extends JsonExtractor {
  async process() {
    const mediaData = this.query(
      `$.profile_user[*].media_map_data['Profile Photo']`
    )[0];

    const processedMediaData = {
      profile_photo: mediaData.uri,
    };

    const stringData = this.query(`$.profile_user[*].string_map_data`)[0];

    const processedStringData = Object.entries(stringData).reduce(
      (acc: { [key: string]: string }, [k, v]: [string, any]) => {
        const columnName = Table.toPropertyName(k);
        acc[columnName] = v.value ?? "";
        return acc;
      },
      {}
    );

    const data: { [key: string]: string } = {
      ...processedStringData,
      ...processedMediaData,
    };

    this.table.rows.push(new PersonalInformation(data));
  }
}

export const personalInformationJson = new PersonalInformationJson(
  config.SERVICE_INSTAGRAM,
  ".*/personal_information.json",
  "personal_information"
);
