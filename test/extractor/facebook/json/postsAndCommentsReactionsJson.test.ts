import { postsAndCommentsReactionsJson } from "../../../../src/extractor/facebook/json/postsAndCommentsReactionsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Posts And Comments Reactions (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/comments_and_reactions/posts_and_comments.json"
    );

    postsAndCommentsReactionsJson.setJsonDocument(data);
    postsAndCommentsReactionsJson.process();

    const { rows } = postsAndCommentsReactionsJson.table;

    const expectedValues = [
      {
        timestamp: 1567322326,
        reaction: "LIKE",
        title: "Jack Langdon likes Ester Short's photo.",
      },
      {
        timestamp: 1567340059,
        reaction: "LIKE",
        title: "Jack Langdon likes Miriam Yam's photo.",
      },
      {
        timestamp: 1567363169,
        reaction: "LIKE",
        title: "Jack Langdon likes Naomi Nay's post.",
      },
      {
        timestamp: 1567408432,
        reaction: "SORRY",
        title: "Jack Langdon reacted to Lenka Ley's post.",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].post_title).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].post_reaction).toEqual(
        new TextTableValue(expectedValue.reaction)
      );
      expect(rows[index].date_posted).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
    });
  });
});
