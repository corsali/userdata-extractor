import { Table } from "../models/table/index.js";

export interface Database {
  initialize(): void;

  createTable(serviceName: string, table: Table): void;

  getDatabase(): any;

  exportDatabase(serviceName: string): Uint8Array;

  runQuery(query: string): QueryResult[];

  close(): void;
}

export interface QueryResult {
  queryString?: string;
  queryResult?: any;
  error?: string;
}
