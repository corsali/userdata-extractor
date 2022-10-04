import { extractTablesFromSqlQuery } from "../../src/utils/index.js";

describe("extractPermissionsFromQuery", () => {
  it("extractPermissionsFromQuery", () => {
    const tables = extractTablesFromSqlQuery([
      "SELECT * FROM personal_interests;",
      "SELECT * FROM instagram.personal_interests;",
      "SELECT * FROM facebook.non_existing_table;",
      `SELECT * FROM netflix.ads_interests
            INNER JOIN instagram.ads_interests ON netflix.ads_interests.ad_id = instagram.ads_interests.id
            INNER JOIN (SELECT * FROM instagram.personal_interests) AS pi ON netflix.ads_interests.id = pi.id;`,
    ]);
    expect(Object.keys(tables).length).toEqual(4);
    expect(tables.instagram.length).toEqual(2);
  });
});
