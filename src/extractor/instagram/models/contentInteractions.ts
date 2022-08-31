import {
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { InstagramBaseModel } from "./instagramBaseModel.js";

export class ContentInteractions extends InstagramBaseModel {
  date_range?: TextTableValue;

  content_interactions?: IntegerTableValue;

  content_interactions_delta?: TextTableValue;

  post_interactions?: IntegerTableValue;

  post_interactions_delta?: TextTableValue;

  story_interactions?: IntegerTableValue;

  story_interactions_delta?: TextTableValue;

  video_interactions?: IntegerTableValue;

  video_interactions_delta?: TextTableValue;

  live_video_interactions?: IntegerTableValue;

  live_video_interactions_delta?: TextTableValue;

  accounts_engaged?: IntegerTableValue;

  accounts_engaged_delta?: TextTableValue;

  constructor(values: { [key: string]: string }) {
    super();
    this.date_range = new TextTableValue(values.dateRange);
    this.content_interactions = new IntegerTableValue(
      values.contentInteractions
    );
    this.content_interactions_delta = new TextTableValue(
      values.contentInteractionsDelta
    );
    this.post_interactions = new IntegerTableValue(values.postInteractions);
    this.post_interactions_delta = new TextTableValue(
      values.postInteractionsDelta
    );
    this.story_interactions = new IntegerTableValue(values.storyInteractions);
    this.story_interactions_delta = new TextTableValue(
      values.storyInteractionsDelta
    );
    this.video_interactions = new IntegerTableValue(values.videoInteractions);
    this.video_interactions_delta = new TextTableValue(
      values.videoInteractionsDelta
    );
    this.live_video_interactions = new IntegerTableValue(
      values.liveVideoInteractions
    );
    this.live_video_interactions_delta = new TextTableValue(
      values.liveVideoInteractionsDelta
    );
    this.accounts_engaged = new IntegerTableValue(values.accountsEngaged);
    this.accounts_engaged_delta = new TextTableValue(
      values.accountsEngagedDelta
    );
    this.content_interactions = new IntegerTableValue(
      values.contentInteractions
    );
    this.content_interactions_delta = new TextTableValue(
      values.contentInteractionsDelta
    );
  }
}
