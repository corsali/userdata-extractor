import { postsFromAppsAndWebsitesJson } from "../../../../src/extractor/facebook/json/postsFromAppsAndWebsitesJson";
import {
  DateTableValue,
  JsonTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Posts From Apps And Websites (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/apps_and_websites_off_of_facebook/posts_from_apps_and_websites.json"
    );

    postsFromAppsAndWebsitesJson.setJsonDocument(data);
    postsFromAppsAndWebsitesJson.process();

    const { rows } = postsFromAppsAndWebsitesJson.table;

    const expectedValues = [
      {
        timestamp: 1253152968,
        title:
          "Georgianne Cleone Gotko posted something via United States Geography and History Quizzes.",
      },
      {
        timestamp: 1248224338,
        title: "Georgianne Cleone Gotko posted something via Flixster.",
      },
      {
        timestamp: 1248223543,
        title: "Georgianne Cleone Gotko posted something via Flixster.",
      },
      {
        timestamp: 1248223454,
        title: "Georgianne Cleone Gotko posted something via Flixster.",
      },
      {
        timestamp: 1248223286,
        title: "Georgianne Cleone Gotko posted something via Flixster.",
      },
      {
        timestamp: 1350686289,
        attachments: [
          {
            data: [
              {
                external_context: {
                  name: "I challenge you in Modern Rap!",
                  url: "http://apps.facebook.com/songpop/",
                },
              },
            ],
          },
        ],
        title: "Georgianne Cleone Gotko posted something via SongPop.",
      },
      {
        timestamp: 1333636493,
        attachments: [
          {
            data: [
              {
                external_context: {
                  name: "Georgianne wrote a Review on Fandango for Titanic 3D",
                  url: "http://www.fandango.com/titanic3d_145202/moviereviews-",
                },
              },
            ],
          },
        ],
        title: "Georgianne Cleone Gotko posted something via Fandango.",
      },
      {
        timestamp: 1425388733,
        attachments: [
          {
            data: [
              {
                external_context: {
                  name: "My Today's Horoscope",
                  url: "https://play.google.com/store/apps/details?id=com.bhaee.zodiac",
                },
              },
            ],
          },
        ],
        title:
          "Georgianne Cleone Gotko posted something via Zodiac Horoscope & Tarot.",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].date_posted).toEqual(
        new DateTableValue(expectedValue.timestamp)
      );
      expect(rows[index].post_title).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].attachments).toEqual(
        new JsonTableValue(expectedValue.attachments)
      );
    });
  });
});
