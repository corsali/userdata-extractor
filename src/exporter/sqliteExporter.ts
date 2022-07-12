import initSqlJs, { Database, QueryExecResult, SqlJsStatic } from "sql.js";

import { Table, TableRow } from "../models/table/index.js";
import { Exporter } from "./exporter.js";

export class SQLiteExporter implements Exporter {
  sql: SqlJsStatic;

  database: Database;

  async initialize() {
    this.sql = await initSqlJs({
      locateFile: (file) =>
        process.env.JEST_WORKER_ID !== undefined
          ? "./node_modules/sql.js/dist/sql-wasm.wasm"
          : `https://sql.js.org/dist/${file}`,
    });
    this.database = new this.sql.Database();
  }

  createTable(table: Table) {
    if (table.rows?.length > 0) {
      const createTableSql = `CREATE TABLE IF NOT EXISTS ${table.tableName} (
        ${this.getColumnTypes(table.rows[0]).join(", \n")}
      );`;
      this.database.exec(createTableSql);
    }

    if (table.rows?.length > 0 && Object.keys(table.rows[0]).length > 0) {
      table.rows?.forEach((row) => {
        const insertRowSql = `INSERT INTO ${table.tableName} VALUES (
          ${Object.keys(row)
            .map((columnName) =>
              row[columnName].type === "text"
                ? `'${row[columnName].value}'`
                : row[columnName].value
            )
            .join(", \n")}
        );`;
        this.database.exec(insertRowSql);
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private getColumnTypes(row: TableRow): string[] {
    const columnNameType: string[] = [];
    Object.keys(row).forEach((columnName) => {
      const columnType = row[columnName].type;
      switch (columnType) {
        case "bool":
          columnNameType.push(`${columnName} integer`);
          break;
        case "float":
          columnNameType.push(`${columnName} real`);
          break;
        default:
          columnNameType.push(`${columnName} ${columnType}`);
          break;
      }
    });
    return columnNameType;
  }

  exportDatabase(): Uint8Array {
    return this.database.export();
  }

  runQuery(query: string): QueryExecResult[] {
    return this.database.exec(query);
  }
}
