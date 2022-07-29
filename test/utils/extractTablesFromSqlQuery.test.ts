import { extractTablesFromSqlQuery } from "../../src/utils/extractTablesFromSqlQuery.js";

describe("extractPermissionsFromQuery", () => {
  it("extractPermissionsFromQuery", () => {
    const permissions = extractTablesFromSqlQuery(
      `SELECT * FROM personal_interests;
       SELECT * FROM non_existing_table;
       SELECT * FROM ads_interests
            INNER JOIN instagram_interests ON ads_interests.ad_id = instagram_interests.id
            INNER JOIN (SELECT * FROM personal_interests) AS pi ON ads_interests.id = pi.id;`
    );
    expect(permissions.size).toEqual(4);
  });
});
