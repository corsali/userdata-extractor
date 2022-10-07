import { DateTableValue, TextTableValue } from "../../../models/table/index.js";
import { YoutubeBaseModel } from "./youtubeBaseModel.js";

export class Playlists extends YoutubeBaseModel {
  playlist_id?: TextTableValue;

  channel_id?: TextTableValue;

  date_created?: DateTableValue;

  date_updated?: DateTableValue;

  playlist_title?: TextTableValue;

  playlist_description?: TextTableValue;

  playlist_visibility?: TextTableValue;

  item_video_id?: TextTableValue;

  date_item_video_added?: DateTableValue;

  constructor(values: {
    playlistId?: string;
    channelId?: string;
    dateCreated?: string;
    dateUpdated?: string;
    playlistTitle?: string;
    playlistDescription?: string;
    playlistVisibility?: string;
    itemVideoId?: string;
    dateItemVideoAdded?: string;
  }) {
    super();
    this.playlist_id = new TextTableValue(values.playlistId);
    this.channel_id = new TextTableValue(values.channelId);
    this.date_created = new DateTableValue(values.dateCreated);
    this.date_updated = new DateTableValue(values.dateUpdated);
    this.playlist_title = new TextTableValue(values.playlistTitle);
    this.playlist_description = new TextTableValue(values.playlistDescription);
    this.playlist_visibility = new TextTableValue(values.playlistVisibility);
    this.item_video_id = new TextTableValue(values.itemVideoId);
    this.date_item_video_added = new DateTableValue(values.dateItemVideoAdded);
  }
}
