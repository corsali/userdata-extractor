import { yourMusicJson } from "../../../../src/extractor/facebook/json/yourMusicJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Music (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/profile_information/your_music.json"
    );

    yourMusicJson.setJsonDocument(data);
    yourMusicJson.process();

    const { rows } = yourMusicJson.table;

    expect(rows.length).toEqual(19);
    expect(rows[0].action_title).toEqual(
      new TextTableValue(
        "Georgianne Cleone Gotko listened to Addictive on Spotify."
      )
    );
    expect(rows[0].action_date).toEqual(new DateTableValue(1353996223));
    expect(rows[0].attachments).toEqual(
      new JsonTableValue([
        {
          data: [
            {
              external_context: {
                name: "Addictive",
                source: "Spotify",
                url: "https://open.spotify.com/track/36jSIOSE72neBbKntCthqw",
              },
            },
          ],
        },
      ])
    );
    expect(rows[0].data).toEqual(new JsonTableValue([]));
  });
});
