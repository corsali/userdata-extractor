import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { BrowserCookies } from "../models/browserCookies.js";

class BrowserCookiesJson extends JsonExtractor {
  async process() {
    const browserCookies = this.query(`$.datr_stats_v2`)[0];

    Object.entries(browserCookies).forEach(
      ([datrCookie, datesUsed]: [string, number[]]) => {
        datesUsed.forEach((dateUsed) => {
          this.table.rows.push(new BrowserCookies(datrCookie, dateUsed));
        });
      }
    );
  }
}

export const browserCookiesJson = new BrowserCookiesJson(
  config.SERVICE_FACEBOOK,
  ".*/browser_cookies.json",
  "browser_cookies"
);
