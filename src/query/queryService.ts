import initSqlJs, { Database, QueryExecResult, SqlJsStatic } from "sql.js";

import { ColumnType, Table } from "./table";

export class QueryService {
  sql: SqlJsStatic;

  database: Database;

  async initialize() {
    this.sql = await initSqlJs({
      locateFile: () => "./data/sql-wasm.wasm",
    });
    this.database = new this.sql.Database();
  }

  createTable(table: Table) {
    const createTableSql = `CREATE TABLE IF NOT EXISTS ${table.tableName} (
        ${table.columns
          ?.map((column) => `${column.name} ${column.type}`)
          .join(", \n")}
    );`;

    this.database.exec(createTableSql);

    table.rows?.forEach((row) => {
      const insertRowSql = `INSERT INTO ${table.tableName} VALUES (
        ${row.values
          ?.map((rowValue, index) =>
            table.columns[index].type === ColumnType.text
              ? `'${rowValue}'`
              : rowValue
          )
          .join(", \n")}
      );`;
      this.database.exec(insertRowSql);
    });
  }

  exportDatabase(): Uint8Array {
    return this.database.export();
  }

  runQuery(query: string): QueryExecResult[] {
    return this.database.exec(query);
  }
}
