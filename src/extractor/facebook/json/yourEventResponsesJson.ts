import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { YourEventResponses } from "../models/yourEventResponses.js";

class YourEventResponsesJson extends JsonExtractor {
  async process() {
    const eventResponses = this.query(`$.event_responses_v2`)[0];

    const processedEvents = Object.entries(eventResponses).flatMap(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ([response, events]: [string, any[]]) =>
        events?.map?.(
          (event) =>
            new YourEventResponses({
              eventName: event?.name,
              dateStart: event?.start_timestamp,
              dateEnd: event?.end_timestamp,
              yourResponse: response.replace("events_", ""),
              placeName: event?.place?.name,
              placeAddress: event?.place?.address,
              latitude: event?.place?.coordinate?.latitude,
              longitude: event?.place?.coordinate?.longitude,
              description: event?.description,
              dateCreated: event?.create_timestamp,
            })
        ) ?? []
    );

    this.table.rows.push(...processedEvents);
  }
}

export const yourEventResponsesJson = new YourEventResponsesJson(
  config.SERVICE_FACEBOOK,
  ".*/your_event_responses.json",
  "your_event_responses"
);
