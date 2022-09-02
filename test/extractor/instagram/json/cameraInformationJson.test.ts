import { cameraInformationJson } from "../../../../src/extractor/instagram/json/cameraInformationJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Camera information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/device_information/camera_information.json"
    );

    cameraInformationJson.setJsonDocument(data);
    cameraInformationJson.process();

    const { rows } = cameraInformationJson.table;

    const expectedSdkValues = [
      "119.0",
      "120.0",
      "121.0",
      "122.0",
      "123.0",
      "124.0",
      "125.0",
      "126.0",
      "127.0",
      "128.0",
      "129.0",
      "130.0",
      "131.0",
      "132.0",
      "133.0",
      "134.0",
      "135.0",
      "136.0",
      "137.0",
      "138.0",
      "139.0",
      "140.0",
      "141.0",
      "142.0",
      "143.0",
    ];

    expect(rows.length).toEqual(expectedSdkValues.length);

    for (let i = 0; i < expectedSdkValues.length; i++) {
      expect(rows[i].device_id).toEqual(
        new TextTableValue("67cf7a976798d8146762443c3438644c")
      );
      expect(rows[i].supported_sdk_version).toEqual(
        new TextTableValue(expectedSdkValues[i])
      );
    }
  });
});
