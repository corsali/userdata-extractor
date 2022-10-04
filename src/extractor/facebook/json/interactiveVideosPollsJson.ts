import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { InteractiveVideosPolls } from "../models/interactiveVideosPolls.js";

class InteractiveVideosPollsJson extends JsonExtractor {
  async process() {
    const interactiveVideos = this.query(`$.video_polls_v2.*`);

    const processedInteractiveVideos = interactiveVideos.map(
      (interactiveVideo) => {
        const pollResponse = interactiveVideo.data?.[0]?.text;
        const pollTitle = interactiveVideo.title?.match(
          new RegExp(
            `took the poll (?<pollTitle>.*) with response ${pollResponse}`
          )
        )?.groups?.pollTitle;

        return new InteractiveVideosPolls(
          interactiveVideo.timestamp,
          interactiveVideo.title,
          pollTitle,
          pollResponse
        );
      }
    );

    this.table.rows.push(...processedInteractiveVideos);
  }
}

export const interactiveVideosPollsJson = new InteractiveVideosPollsJson(
  config.SERVICE_FACEBOOK,
  ".*/interactive_videos.json",
  "interactive_videos"
);
