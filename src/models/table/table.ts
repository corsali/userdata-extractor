import { TableRow } from "./tableRow.js";

export class Table {
  tableName: string;

  rows: TableRow[];

  constructor(tableName: string) {
    this.tableName = tableName;
    this.rows = [];
  }

  static toPropertyName(input: string) {
    return input?.toLowerCase().replace(/ /g, "_");
  }
}
