import { yourPostsInGroupsJson } from "../../../../src/extractor/facebook/json/yourPostsInGroupsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Posts In Groups (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/groups/your_posts_in_groups.json"
    );

    yourPostsInGroupsJson.setJsonDocument(data);
    yourPostsInGroupsJson.process();

    const { rows } = yourPostsInGroupsJson.table;

    expect(rows.length).toEqual(98);
    expect(rows[0].title).toEqual(
      new TextTableValue(
        "Jane Doe posted in â SCORPIOS UNITED MOVEMENT (S.U.M) ð¦."
      )
    );
    expect(rows[0].date_posted).toEqual(new DateTableValue(1511013150000));
    expect(rows[0].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            {
              media: {
                uri: "posts/media/your_posts/23631970_141893319903768_3549867572740787256_o_141893319903768.jpg",
                creation_timestamp: 1511013147,
                media_metadata: {
                  photo_metadata: {
                    exif_data: [
                      {
                        upload_ip: "66.205.105.3",
                        taken_timestamp: 1510969102,
                      },
                    ],
                  },
                },
                description:
                  "Got my month clean chip last and he got his desire chip",
              },
            },
          ],
        },
      ])
    );
    expect(rows[0].post).toEqual(
      new TextTableValue(
        "Got my month clean chip last and he got his desire chip"
      )
    );
    expect(rows[0].data).toEqual(
      new JsonTableValue([
        { post: "Got my month clean chip last and he got his desire chip" },
      ])
    );
    expect(rows[0].tags).toEqual(new TextTableValue("Colby Baldwin"));
  });
});
