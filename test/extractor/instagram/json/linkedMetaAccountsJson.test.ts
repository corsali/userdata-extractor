/* eslint-disable no-restricted-syntax */
import { linkedMetaAccountsJson } from "../../../../src/extractor/instagram/json/linkedMetaAccountsJson";
import {
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Linked Meta Accounts (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/personal_information/linked_meta_accounts.json"
    );

    linkedMetaAccountsJson.setJsonDocument(data);
    linkedMetaAccountsJson.process();

    const { rows } = linkedMetaAccountsJson.table;

    expect(rows.length).toEqual(1);

    expect(rows[0].account_type).toEqual(new TextTableValue("Facebook"));
    expect(rows[0].username).toEqual(new TextTableValue("John Doe"));
    expect(rows[0].identifier).toEqual(new TextTableValue("595956122"));
    expect(rows[0].email).toEqual(new EmailTableValue("johndoe@gmail.com"));
    expect(rows[0].phone_number).toEqual(new PhoneNumberValue("+61408767540"));
  });
});
