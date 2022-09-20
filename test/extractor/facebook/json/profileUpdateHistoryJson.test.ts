import { profileUpdateHistoryJson } from "../../../../src/extractor/facebook/json/profileUpdateHistoryJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Update History (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/profile_update_history.json"
    );

    profileUpdateHistoryJson.setJsonDocument(data);
    profileUpdateHistoryJson.process();

    const { rows } = profileUpdateHistoryJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].update_title).toEqual(
      new TextTableValue("Ashley Lynn added LifeTv to his profile.")
    );
    expect(rows[0].date_updated).toEqual(new DateTableValue(1577828624));
    expect(rows[1].update_title).toEqual(
      new TextTableValue("Ashley Lynn added BIG Events to his profile.")
    );
    expect(rows[1].date_updated).toEqual(new DateTableValue(1598870323));
  });
});
