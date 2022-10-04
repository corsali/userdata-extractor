/**
 * Exported types
 */
import type { Database, QueryResult } from "./database/database.js";
import type { SQLiteDatabase } from "./database/sqliteDatabase.js";
/**
 * Exported functions
 */
import { ServiceFile, zipToSQLiteInstance } from "./services/zipToSQLite.js";
import {
  extractTablesFromSqlQuery,
  filesToZip,
  loadZipFile,
  logger,
  stripZipFiles,
  validateEmailIntegrationZip,
} from "./utils/index.js";

export {
  extractTablesFromSqlQuery,
  filesToZip,
  loadZipFile,
  logger,
  stripZipFiles,
  validateEmailIntegrationZip,
  zipToSQLiteInstance,
};

export type { Database, QueryResult, ServiceFile, SQLiteDatabase };
