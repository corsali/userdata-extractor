/* eslint-disable no-restricted-syntax */
import { devicesJson } from "../../../../src/extractor/instagram/json/devicesJson";
import {
  UrlTableValue,
  DateTableValue,
  TextTableValue,
  BoolTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Devices (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/device_information/devices.json"
    );

    devicesJson.setJsonDocument(data);
    devicesJson.process();

    const { rows } = devicesJson.table;

    expect(rows.length).toEqual(5);
    expect(rows[0].deviceId).toEqual(
      new TextTableValue("android-8623654bffecb343")
    );
    expect(rows[0].lastLogin).toEqual(new DateTableValue(1643336685));
    expect(rows[0].userAgent).toEqual(
      new TextTableValue(
        "Instagram 219.0.0.12.117 Android (31/12; 420dpi; 1080x2123; samsung; SM-N986W; c2q; qcom; en_CA; 346138354)"
      )
    );
    expect(rows[2].deviceId).toEqual(
      new TextTableValue("android-eb5e8f71a4ae887e")
    );
    expect(rows[4].lastLogin).toEqual(new DateTableValue(1559747068));
  });
});
