/**
 * Exported types
 */
import type { Database, QueryResult } from "./database/database.js";
import type { SQLiteDatabase } from "./database/sqliteDatabase.js";
/**
 * Exported functions
 */
import { zipToSQLiteInstance } from "./services/zipToSQLite.js";
import { validateEmailIntegrationZip } from "./services/zipValidator.js";
import { extractTablesFromSqlQuery } from "./utils/extractTablesFromSqlQuery.js";
import { loadZipFile } from "./utils/loadZipFile.js";
import { logger } from "./utils/logger.js";
import { stripZipFiles } from "./utils/stripZipFiles.js";

export {
  extractTablesFromSqlQuery,
  loadZipFile,
  logger,
  stripZipFiles,
  validateEmailIntegrationZip,
  zipToSQLiteInstance,
};

export type { Database, QueryResult, SQLiteDatabase };
