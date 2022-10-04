import { pollsYouVotedOnJson } from "../../../../src/extractor/facebook/json/pollsYouVotedOnJson";
import {
  BoolTableValue,
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Polls You Voted On (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/polls/polls_you_voted_on.json"
    );

    pollsYouVotedOnJson.setJsonDocument(data);
    pollsYouVotedOnJson.process();

    const { rows } = pollsYouVotedOnJson.table;

    const expectedValues = [
      {
        timestamp: 1552265357,
        option: "Donatello",
        voted: true,
        attachments: [
          {
            data: [
              {
                poll: {
                  options: [
                    {
                      option: "Donatello",
                      voted: true,
                    },
                  ],
                },
              },
            ],
          },
        ],
        title: "Jane Doe voted on Carson Michaelangelo Odle's poll.",
      },
      {
        timestamp: 1547618803,
        option: "November",
        voted: true,
        attachments: [
          {
            data: [
              {
                poll: {
                  options: [
                    {
                      option: "November",
                      voted: true,
                    },
                  ],
                },
              },
            ],
          },
        ],
        title: "Jane Doe voted on Jamie McCannon's poll.",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].poll_title).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].date_voted).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[index].poll_option).toEqual(
        new TextTableValue(expectedValue.option)
      );
      expect(rows[index].poll_voted).toEqual(
        new BoolTableValue(expectedValue.voted)
      );
      expect(rows[index].attachments).toEqual(
        new JsonTableValue(expectedValue.attachments)
      );
    });
  });
});
