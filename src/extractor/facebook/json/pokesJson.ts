import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { Pokes } from "../models/pokes.js";

class PokesJson extends JsonExtractor {
  async process() {
    const pokes = this.query(`$.pokes_v2.*`);

    const processedPokes = pokes.map(
      (poke) => new Pokes(poke.poker, poke.pokee, poke.rank, poke.timestamp)
    );

    this.table.rows.push(...processedPokes);
  }
}

export const pokesJson = new PokesJson(
  config.SERVICE_FACEBOOK,
  ".*/pokes.json",
  "pokes"
);
