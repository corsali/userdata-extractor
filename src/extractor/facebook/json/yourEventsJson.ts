import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourEvents } from "../models/yourEvents.js";

class YourEventsJson extends JsonExtractor {
  async process() {
    const events = this.query(`$.your_events_v2.*`);

    const processedEvents = events.map(
      (event) =>
        new YourEvents({
          eventName: event.name,
          dateStart: event.start_timestamp,
          dateEnd: event.end_timestamp,
          placeName: event.place?.name,
          placeAddress: event.place?.address,
          latitude: event.place?.coordinate?.latitude,
          longitude: event.place?.coordinate?.longitude,
          description: event.description,
          dateCreated: event.create_timestamp,
        })
    );

    this.table.rows.push(...processedEvents);
  }
}

export const yourEventsJson = new YourEventsJson(
  config.SERVICE_FACEBOOK,
  ".*/your_events.json",
  "your_events"
);
