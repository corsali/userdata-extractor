import { adsClickedJson } from "../../../../src/extractor/instagram/json/adsClickedJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Ads Clicked (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/ads_and_topics/ads_clicked.json"
    );

    adsClickedJson.setJsonDocument(data);
    adsClickedJson.process();

    const { rows } = adsClickedJson.table;

    const expectedAdsClicked: [string, number][] = [
      ["Jasper Soloff", 1659810593],
      ["instagram.com", 1659810630],
      ["theravadasol", 1659822178],
      ["cozygaby", 1659853035],
      ["ALYWAY ERA", 1660280944],
    ];

    expect(rows.length).toEqual(expectedAdsClicked.length);

    for (let i = 0; i < rows.length; i++) {
      expect(rows[i].ad_title).toEqual(
        new TextTableValue(expectedAdsClicked[i][0])
      );
      expect(rows[i].date_clicked).toEqual(
        new DateTableValue(expectedAdsClicked[i][1])
      );
    }
  });
});
