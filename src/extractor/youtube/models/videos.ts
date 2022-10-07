import {
  DateTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class Videos extends YoutubeBaseModel {
  video_id?: TextTableValue;

  channel_id?: TextTableValue;

  title?: TextTableValue;

  status?: TextTableValue;

  visibility?: TextTableValue;

  time_created?: DateTableValue;

  time_published?: DateTableValue;

  duration?: TextTableValue;

  description?: TextTableValue;

  category?: TextTableValue;

  location_address?: TextTableValue;

  location_country?: TextTableValue;

  time_recorded?: TextTableValue;

  like_count?: IntegerTableValue;

  dislike_count?: IntegerTableValue;

  view_count?: IntegerTableValue;

  syndication?: TextTableValue;

  license?: TextTableValue;

  embeddable?: TextTableValue;

  constructor(values: {
    videoId?: string;
    channelId?: string;
    title?: string;
    status?: string;
    visibility?: string;
    timeCreated?: number | Date | string;
    timePublished?: number | Date | string;
    duration?: string;
    description?: string;
    category?: string;
    locationAddress?: string;
    locationCountry?: string;
    timeRecorded?: string;
    likeCount?: number;
    dislikeCount?: number;
    viewCount?: number;
    syndication?: string;
    license?: string;
    embeddable?: string;
  }) {
    super();
    this.video_id = new TextTableValue(values.videoId);
    this.channel_id = new TextTableValue(values.channelId);
    this.title = new TextTableValue(values.title);
    this.status = new TextTableValue(values.status);
    this.visibility = new TextTableValue(values.visibility);
    this.time_created = new DateTableValue(values.timeCreated);
    this.time_published = new DateTableValue(values.timePublished);
    this.duration = new TextTableValue(values.duration);
    this.description = new TextTableValue(values.description);
    this.category = new TextTableValue(values.category);
    this.location_address = new TextTableValue(values.locationAddress);
    this.location_country = new TextTableValue(values.locationCountry);
    this.time_recorded = new TextTableValue(values.timeRecorded);
    this.like_count = new IntegerTableValue(values.likeCount);
    this.dislike_count = new IntegerTableValue(values.dislikeCount);
    this.view_count = new IntegerTableValue(values.viewCount);
    this.syndication = new TextTableValue(values.syndication);
    this.license = new TextTableValue(values.license);
    this.embeddable = new TextTableValue(values.embeddable);
  }
}
