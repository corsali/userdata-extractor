import { offFacebookActivityJson } from "../../../../src/extractor/facebook/json/offFacebookActivityJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Off-Facebook Activity (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/apps_and_websites_off_of_facebook/your_off-facebook_activity.json"
    );

    offFacebookActivityJson.setJsonDocument(data);
    offFacebookActivityJson.process();

    const { rows } = offFacebookActivityJson.table;

    expect(rows.length).toEqual(14);

    expect(rows[0].activity_name).toEqual(new TextTableValue("formula1.com"));
    expect(rows[0].activity_id).toEqual(new TextTableValue("1290508261050914"));
    expect(rows[0].activity_type).toEqual(new TextTableValue("PAGE_VIEW"));
    expect(rows[0].date_occured).toEqual(new DateTableValue(1661805660));
    expect(rows[12].activity_name).toEqual(new TextTableValue("svgator.com"));
    expect(rows[12].activity_id).toEqual(new TextTableValue("133734537235235"));
    expect(rows[12].activity_type).toEqual(new TextTableValue("VIEW_CONTENT"));
    expect(rows[12].date_occured).toEqual(new DateTableValue(1638066660));
  });
});
