import { commentsJson } from "../../../../src/extractor/facebook/json/commentsJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Topics (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/comments_and_reactions/comments.json"
    );

    commentsJson.setJsonDocument(data);
    commentsJson.process();

    const { rows } = commentsJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].comment_title).toEqual(
      new TextTableValue("Jack Langdon commented on Mat Bright's post.")
    );
    expect(rows[0].comment_text).toEqual(new TextTableValue("Happy Birthday"));
    expect(rows[0].date_commented).toEqual(new DateTableValue(1581942722));
    expect(rows[0].attachments).toEqual(new JsonTableValue());
    expect(rows[1].comment_title).toEqual(
      new TextTableValue("Jack Langdon commented on Jane Glad's photo.")
    );
    expect(rows[1].comment_text).toEqual(new TextTableValue("Are you sure?"));
    expect(rows[1].date_commented).toEqual(new DateTableValue(1642751222));

    expect(rows[1].attachments).toEqual(
      new JsonTableValue(
        '[{"data":[{"media":{"uri":"posts/media/your_posts/272268308_10227164523138962_6846560164892684849_n_16847163336284968.jpg","creation_timestamp":1642751195,"media_metadata":{"photo_metadata":{"exif_data":[{"iso":125,"focal_length":"4755/1000","latitude":-0.53538,"longitude":30.459031,"upload_ip":"530f:3e40:46ad:0:c805:c2cf:234b:df45","taken_timestamp":1633096715,"modified_timestamp":1633096715,"camera_make":"OnePlus","camera_model":"HD1903","exposure":"1/2039","f_stop":"165/100","orientation":1,"original_width":4000,"original_height":3000}]}}}}]}]'
      )
    );
  });
});
