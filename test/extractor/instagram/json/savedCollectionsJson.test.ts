/* eslint-disable no-restricted-syntax */
import { savedCollectionsJson } from "../../../../src/extractor/instagram/json/savedCollectionsJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Saved Collections (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/saved/saved_collections.json"
    );

    savedCollectionsJson.setJsonDocument(data);
    savedCollectionsJson.process();

    const { rows } = savedCollectionsJson.table;
    expect(rows.length).toEqual(6);
    expect(rows[0].name).toEqual(new TextTableValue("Spangly heroes"));
    expect(rows[0].created_date).toEqual(new DateTableValue(1536379872));
    expect(rows[0].updated_date).toEqual(new DateTableValue(1536379881));
    expect(rows[0].shared_url).toEqual(new UrlTableValue(""));
    expect(rows[0].shared_username).toEqual(new TextTableValue(""));
    expect(rows[0].shared_date).toEqual(new DateTableValue(""));
    expect(rows[1].name).toEqual(new TextTableValue("Cool"));
    expect(rows[1].created_date).toEqual(new DateTableValue(1494532432));
    expect(rows[1].updated_date).toEqual(new DateTableValue(1573870677));
    expect(rows[1].shared_url).toEqual(
      new UrlTableValue("https://www.instagram.com/p/CYp1KUYhVFk/")
    );
    expect(rows[1].shared_username).toEqual(
      new TextTableValue("workartlife_by_aa")
    );
    expect(rows[1].shared_date).toEqual(new DateTableValue(1648621994));
    expect(rows[2].name).toEqual(new TextTableValue("Cool"));
    expect(rows[2].created_date).toEqual(new DateTableValue(1494532432));
    expect(rows[2].updated_date).toEqual(new DateTableValue(1573870677));
    expect(rows[2].shared_url).toEqual(
      new UrlTableValue("https://www.instagram.com/p/B4MQBnZgCCk/")
    );
    expect(rows[2].shared_username).toEqual(new TextTableValue("bear.ltd"));
    expect(rows[2].shared_date).toEqual(new DateTableValue(1573870723));
  });
});
