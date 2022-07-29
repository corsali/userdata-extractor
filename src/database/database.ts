import { Table } from "../models/table/index.js";

export interface Database {
  initialize(): void;

  createTable(table: Table): void;

  getDatabase(): any;

  exportDatabase(): Uint8Array;

  runQuery(query: string): QueryResult[];
}

export interface QueryResult {
  queryString?: string;
  queryResult?: any;
  error?: string;
}
