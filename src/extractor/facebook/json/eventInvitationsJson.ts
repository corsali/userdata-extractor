import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { EventInvitations } from "../models/eventInvitations.js";

class EventInvitationsJson extends JsonExtractor {
  async process() {
    const eventInvitations = this.query(`$.events_invited_v2.*`);

    const processedEventInvitations = eventInvitations.map(
      (eventInvitation) =>
        new EventInvitations(
          eventInvitation.name,
          eventInvitation.start_timestamp,
          eventInvitation.end_timestamp
        )
    );

    this.table.rows.push(...processedEventInvitations);
  }
}

export const eventInvitationsJson = new EventInvitationsJson(
  config.SERVICE_FACEBOOK,
  ".*/event_invitations.json",
  "event_invitations"
);
