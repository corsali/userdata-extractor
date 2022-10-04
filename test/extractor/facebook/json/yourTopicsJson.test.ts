import { yourTopicsJson } from "../../../../src/extractor/facebook/json/yourTopicsJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Topics (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_topics/your_topics.json"
    );

    yourTopicsJson.setJsonDocument(data);
    yourTopicsJson.process();

    const { rows } = yourTopicsJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].topic).toEqual(new TextTableValue("Motorsports"));
    expect(rows[1].topic).toEqual(new TextTableValue("Cute Animals"));
  });
});
