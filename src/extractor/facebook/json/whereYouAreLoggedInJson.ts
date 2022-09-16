import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { WhereYouAreLoggedIn } from "../models/whereYouAreLoggedIn.js";

class WhereYouAreLoggedInJson extends JsonExtractor {
  async process() {
    const activeSessions = this.query(`$.active_sessions_v2.*`);

    const processedActiveSessions = activeSessions.map(
      (activeSession) =>
        new WhereYouAreLoggedIn({
          dateSessionCreated: activeSession.created_timestamp,
          dateSessionUpdated: activeSession.updated_timestamp,
          ipAddress: activeSession.ip_address,
          userAgent: activeSession.user_agent,
          cookie: activeSession.datr_cookie,
          device: activeSession.device,
          location: activeSession.location,
          appName: activeSession.app,
          sessionType: activeSession.session_type,
        })
    );

    this.table.rows.push(...processedActiveSessions);
  }
}

export const whereYouAreLoggedInJson = new WhereYouAreLoggedInJson(
  config.SERVICE_FACEBOOK,
  ".*/where_you're_logged_in.json",
  "where_you_are_logged_in"
);
