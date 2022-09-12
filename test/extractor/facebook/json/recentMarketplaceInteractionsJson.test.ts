import { recentMarketplaceInteractionsJson } from "../../../../src/extractor/facebook/json/recentMarketplaceInteractionsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recent Marketplace Interactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/your_interactions_on_facebook/recently_viewed.json"
    );

    recentMarketplaceInteractionsJson.setJsonDocument(data);
    recentMarketplaceInteractionsJson.process();

    const { rows } = recentMarketplaceInteractionsJson.table;

    expect(rows.length).toEqual(11);
    expect(rows[0].interaction_name).toEqual(
      new TextTableValue("Marketplace Searches")
    );
    expect(rows[0].interaction_description).toEqual(
      new TextTableValue("The days that the user searched on Marketplace")
    );
    expect(rows[0].interaction_date).toEqual(
      new DateTableValue("Jul 23, 2022")
    );
    expect(rows[4].interaction_name).toEqual(
      new TextTableValue("Marketplace Contacted Sellers")
    );
    expect(rows[4].interaction_description).toEqual(
      new TextTableValue("The days that the user contacted the sellers")
    );
    expect(rows[4].interaction_date).toEqual(
      new DateTableValue("Jun 24, 2020")
    );
    expect(rows[10].interaction_name).toEqual(
      new TextTableValue("Marketplace Shown to You")
    );
    expect(rows[10].interaction_description).toEqual(
      new TextTableValue(
        "Dates when the Marketplace tab was shown to you on Facebook"
      )
    );
    expect(rows[10].interaction_date).toEqual(
      new DateTableValue("Jul 22, 2022")
    );
  });
});
