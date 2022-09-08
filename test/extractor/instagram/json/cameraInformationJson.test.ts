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

    expect(rows.length).toEqual(1);

    expect(rows[0].device_id).toEqual(
      new TextTableValue("efde89c2961a6f2fe5b4f100052febdb")
    );
    expect(rows[0].supported_sdk_versions).toEqual(
      new TextTableValue(
        "119.0,120.0,121.0,122.0,123.0,124.0,125.0,126.0,127.0,128.0,129.0,130.0,131.0,132.0,133.0,134.0,135.0,136.0,137.0,138.0,139.0,140.0,141.0,142.0,143.0,144.0"
      )
    );
    expect(rows[0].compression).toEqual(new TextTableValue("etc2_compression"));
    expect(rows[0].face_tracker_version).toEqual(new TextTableValue("14"));
  });
});
