import config from "../../../config/index.js";
import { CsvExtractor } from "../../csvExtractor.js";
import { ViewingHistory } from "../models/viewingHistory.js";

class ViewingHistoryCsv extends CsvExtractor {
  async process() {
    await this.parse();

    const mappedRow = this.csvDocument.map(
      (row: any) => new ViewingHistory(row.title, row.date)
    );

    this.table.rows.push(...mappedRow);
  }
}

export const viewingHistoryCsv = new ViewingHistoryCsv(
  config.SERVICE_NETFLIX_VIEWING_HISTORY,
  ".*NetflixViewingHistory.csv",
  "viewing_history"
);
