import { QueryResult } from "../../src/database/database";
import { SQLiteDatabase } from "../../src/database/sqliteDatabase";
import {
  IntegerTableValue,
  Table,
  TextTableValue,
} from "../../src/models/table";

describe("SQLite Database", () => {
  const database = new SQLiteDatabase();

  beforeAll(async () => {
    const personalInformation = new Table("personal_information");
    personalInformation.rows.push({
      first_name: new TextTableValue("John"),
      last_name: new TextTableValue("Doe"),
      age: new IntegerTableValue(25),
    });
    personalInformation.rows.push({
      first_name: new TextTableValue("Jane"),
      last_name: new TextTableValue("Smith"),
      age: new IntegerTableValue(30),
    });

    await database.initialize();
    database.createTable("instagram", personalInformation);
  });

  afterAll(() => {
    database.close();
  });

  describe("runQuery", () => {
    test("it should run a single query", async () => {
      const query: QueryResult[] = database.runQuery([
        "select * from personal_information",
      ]);
      expect(query.length).toEqual(1);
      expect(query[0]?.queryResult?.length).toEqual(2);
    });

    test("it should run multiple queries", async () => {
      const query: QueryResult[] = database.runQuery([
        "select * from personal_information;",
        "select AVG(age) from personal_information;",
        "select SUM(age) from personal_information;",
      ]);
      expect(query.length).toEqual(3);
    });

    test("it should run partial queries when error occurs", async () => {
      const query: QueryResult[] = database.runQuery([
        "select * from personal_information;",
        "select * from personal_information where non_existing_column = NULL;",
        "select * from non_existing_table;",
      ]);
      expect(query.length).toEqual(3);
    });

    test("it should return empty array when error ocurrs", async () => {
      const query: QueryResult[] = database.runQuery([
        "select * from non_existent_table;",
        "select fake_field from personal_information;",
      ]);
      expect(query[0]?.queryResult).toEqual([]);
      expect(query[1]?.queryResult).toEqual([]);
    });
  });
});
