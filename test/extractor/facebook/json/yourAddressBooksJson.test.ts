import { yourAddressBooksJson } from "../../../../src/extractor/facebook/json/yourAddressBooksJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Your Address Books (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/other_personal_information/your_address_books.json"
    );

    yourAddressBooksJson.setJsonDocument(data);
    yourAddressBooksJson.process();

    const { rows } = yourAddressBooksJson.table;

    expect(rows.length).toEqual(6);

    expect(rows[0].contact_name).toEqual(
      new TextTableValue("Harrison Plenderleith")
    );
    expect(rows[0].contact_point).toEqual(new TextTableValue(""));
    expect(rows[0].date_created).toEqual(new DateTableValue(1651146592));
    expect(rows[0].date_updated).toEqual(new DateTableValue(1651146592));
    expect(rows[1].contact_name).toEqual(new TextTableValue("Snowie Raymonds"));
    expect(rows[1].contact_point).toEqual(new TextTableValue("+354486384255"));
    expect(rows[1].date_created).toEqual(new DateTableValue(1609575513));
    expect(rows[1].date_updated).toEqual(new DateTableValue(1609575513));
    expect(rows[3].contact_name).toEqual(new TextTableValue("Platt Harblood"));
    expect(rows[3].contact_point).toEqual(
      new TextTableValue("platt.h@gmail.com")
    );
    expect(rows[3].date_created).toEqual(new DateTableValue(1609575513));
    expect(rows[3].date_updated).toEqual(new DateTableValue(1609575513));
  });
});
