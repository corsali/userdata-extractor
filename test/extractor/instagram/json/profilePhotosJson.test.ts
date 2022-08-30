/* eslint-disable no-restricted-syntax */
import { profilePhotosJson } from "../../../../src/extractor/instagram/json/profilePhotosJson";
import {
  UrlTableValue,
  DateTableValue,
  TextTableValue,
  BoolTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Profile Photos (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/content/profile_photos.json"
    );

    profilePhotosJson.setJsonDocument(data);
    profilePhotosJson.process();

    const { rows } = profilePhotosJson.table;

    const row = rows[0];

    expect(rows.length).toEqual(1);
    expect(row.uri).toEqual(
      new UrlTableValue(
        "media/other/13167288_176460202750036_1205308000_a_17855760448055185.jpg"
      )
    );
    expect(row.created).toEqual(new DateTableValue(1463170610));
    expect(row.title).toEqual(new TextTableValue(""));
    expect(row.isProfilePicture).toEqual(new BoolTableValue(true));
  });
});
