import { possibleEmailsJson } from "../../../../src/extractor/instagram/json/possibleEmailsJson";
import { EmailTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Possible Emails (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/instagram/information_about_you/possible_emails.json"
    );

    possibleEmailsJson.setJsonDocument(data);
    possibleEmailsJson.process();

    const { rows } = possibleEmailsJson.table;

    expect(rows.length).toEqual(1);
    expect(rows[0].email).toEqual(
      new EmailTableValue("lovemothstudio@gmail.com")
    );
  });
});
