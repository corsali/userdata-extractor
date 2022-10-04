import { browserCookiesJson } from "../../../../src/extractor/facebook/json/browserCookiesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Browser Cookies (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/security_and_login_information/browser_cookies.json"
    );

    browserCookiesJson.setJsonDocument(data);
    browserCookiesJson.process();

    const { rows } = browserCookiesJson.table;

    expect(rows.length).toEqual(152);
    expect(rows[0].datr_cookie).toEqual(
      new TextTableValue("NisTYuszuSURerUxouZK3BIR")
    );
    expect(rows[0].date_used).toEqual(new DateTableValue(1650777415));
    expect(rows[23].datr_cookie).toEqual(
      new TextTableValue("_JYRYgjQtNlvfmhSFlj7padN")
    );
    expect(rows[23].date_used).toEqual(new DateTableValue(1650766564));
  });
});
