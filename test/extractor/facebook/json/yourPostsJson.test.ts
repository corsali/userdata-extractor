import { yourPostsJson } from "../../../../src/extractor/facebook/json/yourPostsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Posts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/posts/your_posts_1.json"
    );

    yourPostsJson.setJsonDocument(data);
    yourPostsJson.process();

    const { rows } = yourPostsJson.table;

    expect(rows.length).toEqual(24);
    expect(rows[0].date_posted).toEqual(new DateTableValue(1507661694));
    expect(rows[0].post_text).toEqual(
      new TextTableValue("New facebook  for a new start")
    );
    expect(rows[0].attachments).toEqual(new JsonTableValue(""));
    expect(rows[1].date_posted).toEqual(new DateTableValue(1507673173));
    expect(rows[1].post_text).toEqual(new TextTableValue(""));
    expect(rows[1].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            {
              external_context: {
                url: "http://janedoe.sarahah.com/",
              },
            },
          ],
        },
      ])
    );
  });
});
