import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { ProfilePhotos } from "../models/profilePhotos.js";

class ProfilePhotosJson extends JsonExtractor {
  async process() {
    const profilePictures = this.query(`$.ig_profile_picture[*]`);

    const processedProfilePictures = profilePictures.map(
      (profilePicture) =>
        new ProfilePhotos({
          uri: profilePicture.uri,
          created: profilePicture.creation_timestamp,
          title: profilePicture.title,
          isProfilePicture: profilePicture.is_profile_picture,
        })
    );

    this.table.rows.push(...processedProfilePictures);
  }
}

export const profilePhotosJson = new ProfilePhotosJson(
  config.SERVICE_INSTAGRAM,
  ".*/profile_photos.json",
  "profile_photos"
);
