/**
 * Extract the table names from an SQL query
 * @param query Raw SQL query string
 * @returns set of table names in the query
 */
const extractTablesFromSqlQuery = (query: string): Set<string> => {
  const tableNames = query
    .toLowerCase()
    .match(/(?<= (from|join) \s*)([a-z0-9-_]+)/gm);
  return new Set<string>(tableNames);
};

export { extractTablesFromSqlQuery };
