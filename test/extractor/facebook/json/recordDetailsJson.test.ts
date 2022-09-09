import { recordDetailsJson } from "../../../../src/extractor/facebook/json/recordDetailsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Record Details (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/security_and_login_information/record_details.json"
    );

    recordDetailsJson.setJsonDocument(data);
    recordDetailsJson.process();

    const { rows } = recordDetailsJson.table;

    expect(rows.length).toEqual(2);
    expect(rows[0].event_name).toEqual(new TextTableValue("Password Change"));
    expect(rows[0].date_session_created).toEqual(
      new DateTableValue(1599915008)
    );
    expect(rows[0].session_ip_address).toEqual(
      new TextTableValue("45.197.215.186")
    );
    expect(rows[0].session_user_agent).toEqual(
      new TextTableValue(
        "Dalvik/2.1.0 (Linux; U; Android 8.0.0; SM-G930F Build/R16NW) [FBAN/Orca-Android;FBAV/281.0.0.15.120;FBPN/com.facebook.orca;FBLC/en_US;FBBV/243644793;FBCR/3;FBMF/samsung;FBBD/samsung;FBDV/SM-G930F;FBSV/8.0.0;FBCA/armeabi-v7a:armeabi;FBDM/{density=3.0,width=1080,height=1920};FB_FW/1;]"
      )
    );
    expect(rows[0].session_cookie).toEqual(
      new TextTableValue("_8Nc********************")
    );
    expect(rows[1].event_name).toEqual(new TextTableValue("Password Change"));
    expect(rows[1].date_session_created).toEqual(
      new DateTableValue(1599337421)
    );
    expect(rows[1].session_ip_address).toEqual(
      new TextTableValue("2560:2384:eb54:1906:4c4a:a85a:879f:d5d7")
    );
    expect(rows[1].session_user_agent).toEqual(
      new TextTableValue(
        "Mozilla/5.0 (Linux; Android 8.0.0; SM-G930F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Mobile Safari/537.36"
      )
    );
    expect(rows[1].session_cookie).toEqual(
      new TextTableValue("VvNT********************")
    );
  });
});
