import { recentlyViewedVideosJson } from "../../../../src/extractor/facebook/json/recentlyViewedVideosJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Recently Viewed Videos (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_interactions_on_facebook/recently_viewed.json"
    );

    recentlyViewedVideosJson.setJsonDocument(data);
    recentlyViewedVideosJson.process();

    const { rows } = recentlyViewedVideosJson.table;

    expect(rows.length).toEqual(7);
    expect(rows[0].facebook_watch_datatype_name).toEqual(
      new TextTableValue("Shows")
    );
    expect(rows[0].facebook_watch_datatype_description).toEqual(
      new TextTableValue("A list of the individual videos you've watched")
    );
    expect(rows[0].video_name).toEqual(
      new TextTableValue(
        "Don Laka's video: When cats are the nannies of little chickens \u00f0\u009f\u0090\u0088\u00f0\u009f\u0090\u00a3\u00f0\u009f\u0090\u00b9"
      )
    );
    expect(rows[0].video_type).toEqual(new TextTableValue("Facebook Watch"));
    expect(rows[0].date_watched).toEqual(new DateTableValue(1654458444));
    expect(rows[0].video_link).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/kwaaijazz/videos/332747515584251/"
      )
    );
    expect(rows[0].watch_position_seconds).toEqual(new FloatTableValue(""));
    expect(rows[2].facebook_watch_datatype_name).toEqual(
      new TextTableValue("Time Viewed")
    );
    expect(rows[2].facebook_watch_datatype_description).toEqual(
      new TextTableValue("The amount of an individual video you've watched")
    );
    expect(rows[2].video_name).toEqual(
      new TextTableValue(
        "Men's Health's video: Arnold Schwarzenegger | Gym & Fridge"
      )
    );
    expect(rows[2].video_type).toEqual(new TextTableValue("Facebook Watch"));
    expect(rows[2].date_watched).toEqual(new DateTableValue(1659508726000));
    expect(rows[2].video_link).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/MensHealth/videos/2907548296211857/"
      )
    );
    expect(rows[2].watch_position_seconds).toEqual(
      new FloatTableValue("61.226")
    );
    expect(rows[6].facebook_watch_datatype_name).toEqual(
      new TextTableValue("")
    );
    expect(rows[6].facebook_watch_datatype_description).toEqual(
      new TextTableValue("")
    );
    expect(rows[6].video_name).toEqual(new TextTableValue("F1's video"));
    expect(rows[6].video_type).toEqual(new TextTableValue("other"));
    expect(rows[6].date_watched).toEqual(new DateTableValue(1660887026));
    expect(rows[6].video_link).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/Formula1/posts/pfbid037NMRvE3WobniTiPBpYFiyRBZMHtzSCWDgxJGyT6ossLZr4AcVDZC3rRVdLXxYQfFl"
      )
    );
    expect(rows[6].watch_position_seconds).toEqual(new FloatTableValue(""));
  });
});
