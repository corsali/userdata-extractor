import { Table } from "../models/table/index.js";

export interface Database {
  initialize(): void;

  createTable(table: Table): void;

  exportDatabase(): any;

  runQuery(query: string): any;
}
