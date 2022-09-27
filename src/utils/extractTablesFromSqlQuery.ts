/**
 * Extract the table names from an SQL query
 * @param query Raw SQL query string
 * @returns A mapping from integration names to a list of table names for that integration
 */
const extractTablesFromSqlQuery = (
  queries: string[]
): { [key: string]: string[] } => {
  const uniqueTables: { [key: string]: string[] } = {};

  queries?.forEach((query) => {
    query
      .toLowerCase()
      .match(/(?: (from|join|on) \s*)([a-z0-9-_.]+)/gm)
      .map((match) => match.replaceAll(/ (from|join|on) /gm, ""))
      .forEach((tableName) => {
        if (tableName.includes(".")) {
          const [database, table] = tableName.split(".");
          if (!uniqueTables[database]) {
            uniqueTables[database] = [];
          }
          if (!uniqueTables[database].includes(table)) {
            uniqueTables[database].push(table);
          }
        } else {
          // Tables that are not namespaced fall under "uncategorized"
          // Ex: namespaced: instagram.ads_clicked vs non-namespaced: ads_clicked
          if (!uniqueTables.uncategorized) {
            uniqueTables.uncategorized = [];
          }
          if (!uniqueTables.uncategorized.includes(tableName)) {
            uniqueTables.uncategorized.push(tableName);
          }
        }
      });
  });

  return uniqueTables;
};

export { extractTablesFromSqlQuery };
