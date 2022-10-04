import { gamingProfileJson } from "../../../../src/extractor/facebook/json/gamingProfileJson";
import {
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Gaming Profile (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_gaming/gaming_profile.json"
    );

    gamingProfileJson.setJsonDocument(data);
    gamingProfileJson.process();

    const { rows } = gamingProfileJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].player_name).toEqual(new TextTableValue("Georgianne"));
    expect(rows[0].avatar_uri).toEqual(
      new UrlTableValue(
        "messages/support_files/103955384_10150084225789996_1253964460137084185_n_650384378848160.png"
      )
    );
    expect(rows[0].date_added_avatar).toEqual(new DateTableValue(1592001500));
  });
});
