import { placesYouHaveCreatedJson } from "../../../../src/extractor/facebook/json/placesYouHaveCreatedJson";
import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Places You've created (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/your_places/places_you've_created.json"
    );

    placesYouHaveCreatedJson.setJsonDocument(data);
    placesYouHaveCreatedJson.process();

    const { rows } = placesYouHaveCreatedJson.table;

    const expectedValues = [
      {
        name: "Citgo",
        coordinate: {
          latitude: 40.426693274677,
          longitude: -79.93840659976,
        },
        address: "Pittsburgh, PA 15217",
        url: "https://www.facebook.com/337651782993172",
        creation_timestamp: 1345302577,
      },
      {
        name: "Arlington Rd",
        coordinate: {
          latitude: 41.028280821667,
          longitude: -81.491551715957,
        },
        address: "Akron, OH",
        url: "https://www.facebook.com/254141801372137",
        creation_timestamp: 1344980927,
      },
      {
        name: "Seasons Rd",
        coordinate: {
          latitude: 41.202914714813,
          longitude: -81.478112339973,
        },
        address: "Stow, OH",
        url: "https://www.facebook.com/150312568326554",
        creation_timestamp: 1283425803,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].place_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].coordinate_latitude).toEqual(
        new FloatTableValue(expectedValue.coordinate.latitude)
      );
      expect(rows[index].coordinate_longitude).toEqual(
        new FloatTableValue(expectedValue.coordinate.longitude)
      );
      expect(rows[index].address).toEqual(
        new TextTableValue(expectedValue.address)
      );
      expect(rows[index].url).toEqual(new UrlTableValue(expectedValue.url));
      expect(rows[index].date_created).toEqual(
        new DateTableValue(expectedValue.creation_timestamp)
      );
    });
  });
});
