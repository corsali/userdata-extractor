import { mobileDevicesJson } from "../../../../src/extractor/facebook/json/mobileDevicesJson";
import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Mobile Devices (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/mobile_devices.json"
    );

    mobileDevicesJson.setJsonDocument(data);
    mobileDevicesJson.process();

    const { rows } = mobileDevicesJson.table;

    expect(rows.length).toEqual(2);

    expect(rows[0].device_type).toEqual(new TextTableValue("unknown"));
    expect(rows[0].device_os).toEqual(new TextTableValue("Android unknown"));
    expect(rows[0].date_updated).toEqual(new DateTableValue(1661518593));
    expect(rows[0].family_device_id).toEqual(
      new TextTableValue("EFE526AC-1D2C-5EBB-A314-A1C60EE6686A")
    );
    expect(rows[0].device_locale).toEqual(new TextTableValue("en_US"));
    expect(rows[0].push_token_disabled).toEqual(new BoolTableValue(false));
    expect(rows[0].push_token_date_created).toEqual(new DateTableValue(0));
    expect(rows[0].push_token_date_updated).toEqual(new DateTableValue(0));
    expect(rows[0].push_token_app_version).toEqual(new TextTableValue(""));
    expect(rows[0].push_token_locale).toEqual(new TextTableValue(""));
    expect(rows[0].push_token_os_version).toEqual(new TextTableValue(""));
    expect(rows[0].push_token_token).toEqual(new TextTableValue(""));
    expect(rows[0].push_token_device_id).toEqual(new TextTableValue(""));

    expect(rows[1].device_type).toEqual(new TextTableValue("HD1903"));
    expect(rows[1].device_os).toEqual(new TextTableValue("Android 11"));
    expect(rows[1].date_updated).toEqual(new DateTableValue(1661621112));
    expect(rows[1].family_device_id).toEqual(new TextTableValue(""));
    expect(rows[1].device_locale).toEqual(new TextTableValue("en_US"));
    expect(rows[1].push_token_disabled).toEqual(new BoolTableValue(false));
    expect(rows[1].push_token_date_created).toEqual(
      new DateTableValue(1608920037)
    );
    expect(rows[1].push_token_date_updated).toEqual(
      new DateTableValue(1661891209)
    );
    expect(rows[1].push_token_app_version).toEqual(
      new TextTableValue("317.0.0.1.104")
    );
    expect(rows[1].push_token_locale).toEqual(new TextTableValue("en_US"));
    expect(rows[1].push_token_os_version).toEqual(new TextTableValue("11"));
    expect(rows[1].push_token_token).toEqual(
      new TextTableValue("djm_********************")
    );
    expect(rows[1].push_token_device_id).toEqual(
      new TextTableValue("e45b2454-c58f-4ae8-b0aa-6eee0dcd7047")
    );
  });
});
