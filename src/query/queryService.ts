import initSqlJs, { Database, QueryExecResult, SqlJsStatic } from "sql.js";

import { ColumnType, Table } from "./table.js";

export class QueryService {
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
    if (table.columns?.length > 0) {
      const createTableSql = `CREATE TABLE IF NOT EXISTS ${table.tableName} (
        ${table.columns
          ?.map((column) => `${column.name} ${column.type}`)
          .join(", \n")}
      );`;
      this.database.exec(createTableSql);
    }

    if (table.rows?.length > 0 && table.rows[0].values.length > 0) {
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
  }

  exportDatabase(): Uint8Array {
    return this.database.export();
  }

  runQuery(query: string): QueryExecResult[] {
    return this.database.exec(query);
  }
}
