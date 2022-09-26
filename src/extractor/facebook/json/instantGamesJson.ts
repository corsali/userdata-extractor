import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { InstantGames } from "../models/instantGames.js";

class InstantGamesJson extends JsonExtractor {
  async process() {
    const instantGames = this.query(`$.instant_games_played_v2.*`);

    const processedInstantGames = instantGames.map(
      (instantGame) =>
        new InstantGames({
          gameName: instantGame.name,
          dateAdded: instantGame.added_timestamp,
          userAppScopedId: instantGame.user_app_scoped_id,
          category: instantGame.category,
        })
    );

    this.table.rows.push(...processedInstantGames);
  }
}

export const instantGamesJson = new InstantGamesJson(
  config.SERVICE_FACEBOOK,
  ".*/instant_games.json",
  "instant_games"
);
