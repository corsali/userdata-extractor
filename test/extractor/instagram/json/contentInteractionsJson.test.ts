/* eslint-disable no-restricted-syntax */
import { contentInteractionsJson } from "../../../../src/extractor/instagram/json/contentInteractionsJson";
import {
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Content Interactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/past_instagram_insights/content_interactions.json"
    );

    contentInteractionsJson.setJsonDocument(data);
    contentInteractionsJson.process();

    const { rows } = contentInteractionsJson.table;

    expect(rows.length).toEqual(1);

    const row = rows[0];

    expect(row.date_range).toEqual(new TextTableValue("Jan 27 - Apr 26"));
    expect(row.content_interactions).toEqual(new IntegerTableValue("0"));
    expect(row.content_interactions_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
    expect(row.post_interactions).toEqual(new IntegerTableValue("0"));
    expect(row.post_interactions_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
    expect(row.story_interactions).toEqual(new IntegerTableValue("0"));
    expect(row.story_interactions_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
    expect(row.video_interactions).toEqual(new IntegerTableValue("0"));
    expect(row.video_interactions_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
    expect(row.live_video_interactions).toEqual(new IntegerTableValue("0"));
    expect(row.live_video_interactions_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
    expect(row.accounts_engaged).toEqual(new IntegerTableValue("0"));
    expect(row.accounts_engaged_delta).toEqual(
      new TextTableValue("0% vs Oct 29 - Jan 26")
    );
  });
});
