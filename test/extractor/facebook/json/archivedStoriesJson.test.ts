import { archivedStoriesJson } from "../../../../src/extractor/facebook/json/archivedStoriesJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Archived Stories (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/stories/archived_stories.json"
    );

    archivedStoriesJson.setJsonDocument(data);
    archivedStoriesJson.process();

    const { rows } = archivedStoriesJson.table;

    expect(rows.length).toEqual(10);
    expect(rows[5].story_title).toEqual(
      new TextTableValue(
        "A photo from Georgianne Cleone Gotko's story was added to her archive."
      )
    );
    expect(rows[5].date_added).toEqual(new DateTableValue(1581275098000));
    expect(rows[5].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            {
              media: {
                uri: "posts/media/your_posts/84598261_10219203260064881_4698872042059988992_n_10219203260024880.jpg",
                creation_timestamp: 1581369148,
                media_metadata: {
                  photo_metadata: {
                    exif_data: [
                      {
                        upload_ip: "2600:1700:8680:1300:581e:face:5505:c1f0",
                        taken_timestamp: 1581369148,
                      },
                    ],
                  },
                },
                description:
                  "Kyler got his first hair cut he did very well surprisingly",
              },
            },
          ],
        },
      ])
    );
    expect(rows[5].data).toEqual(new JsonTableValue([]));
    expect(rows[5].attachment_descriptions).toEqual(
      new TextTableValue(
        "Kyler got his first hair cut he did very well surprisingly"
      )
    );
  });
});
