import { Table } from "../models/table/index.js";

export interface Database {
  initialize(): void;

  createTable(table: Table): void;

  getDatabase(): any;

  exportDatabase(): Uint8Array;

  runQuery(query: string): any;
}
