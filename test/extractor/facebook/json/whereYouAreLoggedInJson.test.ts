import { whereYouAreLoggedInJson } from "../../../../src/extractor/facebook/json/whereYouAreLoggedInJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Record Details (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/where_you're_logged_in.json"
    );

    whereYouAreLoggedInJson.setJsonDocument(data);
    whereYouAreLoggedInJson.process();

    const { rows } = whereYouAreLoggedInJson.table;

    const expectedValues = [
      {
        created_timestamp: 1660431243,
        updated_timestamp: 1661938772,
        ip_address: "74.219.42.162",
        user_agent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        datr_cookie: "hSv4********************",
        device: "Windows PC",
        location: "London, United Kingdom",
        app: "Chrome",
        session_type: "web",
      },
      {
        created_timestamp: 1608920035,
        updated_timestamp: 1661852755,
        ip_address: "71.27.34.217",
        user_agent:
          "Dalvik/2.1.0 (Linux; U; Android 11; HD1903 Build/RKQ1.201022.002) [FBAN/MessengerLite;FBAV/317.0.0.1.104;FBPN/com.facebook.mlite;FBLC/en_US;FBBV/390636365;FBCR/EE;FBMF/OnePlus;FBBD/OnePlus;FBDV/HD1903;FBSV/11;FBCA/arm64-v8a:null;FBDM/{density=2.8125,width=1080,height=2197};]",
        datr_cookie: "4yvm********************",
        device: "OnePlus 7T",
        location: "Bratislava, Slovakia",
        app: "",
        session_type: "messenger_lite",
      },
      {
        created_timestamp: 1661325903,
        ip_address: "71.27.34.217",
        user_agent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
        datr_cookie: "hSv4********************",
        device: "Device type unknown",
        location: "Bratislava, Slovakia",
        app: "",
        session_type: "instagram",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);

    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].date_session_created).toEqual(
        new DateTableValue(expectedValue.created_timestamp)
      );
      expect(rows[0].date_session_created).toEqual(
        new DateTableValue(1660431243)
      );
      expect(rows[0].ip_address).toEqual(new TextTableValue("74.219.42.162"));
      expect(rows[0].user_agent).toEqual(
        new TextTableValue(
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
        )
      );
      expect(rows[0].cookie).toEqual(
        new TextTableValue("hSv4********************")
      );
      expect(rows[0].device).toEqual(new TextTableValue("Windows PC"));
      expect(rows[0].location).toEqual(
        new TextTableValue("London, United Kingdom")
      );
      expect(rows[0].app_name).toEqual(new TextTableValue("Chrome"));
      expect(rows[0].session_type).toEqual(new TextTableValue("web"));
    });
  });
});
