import initSqlJs, { Database as SqlDatabase, SqlJsStatic } from "sql.js";

import { Table, TableRow } from "../models/table/index.js";
import { Database, QueryResult } from "./database.js";

export class SQLiteDatabase implements Database {
  sql: SqlJsStatic;

  databaseMap: { [key: string]: SqlDatabase };

  mainDatabase: SqlDatabase;

  async initialize() {
    this.sql = await initSqlJs({
      locateFile: (file) =>
        // When running in Jest, sql.js is unable to resolve the sql-wasm package from the CDN
        process.env.JEST_WORKER_ID !== undefined
          ? "./node_modules/sql.js/dist/sql-wasm.wasm"
          : `https://sql.js.org/dist/${file}`,
    });
    this.databaseMap = {};
    this.mainDatabase = new this.sql.Database();
  }

  /**
   * Creates an SQLite table from a Table object
   * @param table Table object to create the table from
   */
  async createTable(serviceName: string, table: Table) {
    if (!this.databaseMap[serviceName]) {
      this.databaseMap[serviceName] = new this.sql.Database();
      this.mainDatabase.exec(
        `ATTACH DATABASE "${this.databaseMap[serviceName].filename}" AS ${serviceName};`
      );
    }

    if (table?.rows?.length > 0) {
      const columnTypes = this.getColumnTypes(table.rows[0]).join(", ");
      const createTableSql = `CREATE TABLE IF NOT EXISTS ${serviceName}.${table.tableName} (${columnTypes});`;
      this.mainDatabase.run(createTableSql);
    }

    if (table?.rows?.length > 0 && Object.keys(table.rows[0]).length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const row of table.rows) {
        const columnValues = Object.keys(row)
          .map((columnName) => `:${columnName}`)
          .join(", ");

        const insertRowSql = `INSERT INTO ${serviceName}.${table.tableName} VALUES (${columnValues});`;

        const bindParams = Object.keys(row).reduce(
          (acc, columnName) => ({
            ...acc,
            [`:${columnName}`]: row[columnName].value,
          }),
          {}
        );
        this.mainDatabase.exec(insertRowSql, bindParams);
      }
    }
  }

  /**
   * Maps types of TableRow into allowed types in SQLite, used for creating a table schema
   * @param row row.type contains the type of column it is
   * @returns array of row name and type, ex ["number_of_likes integer", "username text"]
   */
  // eslint-disable-next-line class-methods-use-this
  private getColumnTypes(row: TableRow): string[] {
    const columnNameType: string[] = [];
    Object.keys(row).forEach((columnName) => {
      const columnType = row[columnName].type;
      switch (columnType) {
        case "bool":
        case "integer":
          columnNameType.push(`${columnName} integer`);
          break;
        case "float":
          columnNameType.push(`${columnName} real`);
          break;
        case "date":
          columnNameType.push(`${columnName} date`);
          break;
        default:
          columnNameType.push(`${columnName} text`);
          break;
      }
    });
    return columnNameType;
  }

  getDatabase(): SqlDatabase {
    return this.mainDatabase;
  }

  exportDatabase(serviceName: string): Uint8Array {
    if (this.databaseMap[serviceName]) {
      return this.databaseMap[serviceName].export();
    }
    return null;
  }

  /**
   * Run an SQL query against the current database
   * @param query Raw SQL query string
   * @returns an array of query results
   */
  runQuery(query: string): QueryResult[] {
    const queryResults: QueryResult[] = [];
    try {
      const queryIterator = this.mainDatabase.iterateStatements(query);

      // Iterate through the query which possibly has multiple SQL statements
      // eslint-disable-next-line no-restricted-syntax
      for (const statement of queryIterator) {
        const queryResult: QueryResult = {};
        try {
          queryResult.queryString = statement.getNormalizedSQL();
          queryResult.queryResult = this.mainDatabase.exec(
            queryResult.queryString
          );
        } catch (singleQueryError) {
          queryResult.queryString = queryIterator.getRemainingSql();
          queryResult.error = singleQueryError.toString();
        } finally {
          queryResults.push(queryResult);
        }
      }
    } catch (entireQueryError) {
      queryResults.push({
        error: entireQueryError.toString(),
      });
    }

    return queryResults;
  }
}
