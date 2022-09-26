import { accountsCenterJson } from "../../../../src/extractor/facebook/json/accountsCenterJson";
import {
  DateTableValue,
  EmailTableValue,
  IntegerTableValue,
  TextTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Account Center (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/facebook_accounts_center/accounts_center.json"
    );

    accountsCenterJson.setJsonDocument(data);
    accountsCenterJson.process();

    const { rows } = accountsCenterJson.table;

    const expectedValues = [
      {
        service_name: "Instagram",
        native_app_id: 47870148017,
        username: "texan_girlie",
        email: "christieclayton2020@gmail.com",
        name: "Jane Doe",
        linked_time: 1621485301,
      },
      {
        service_name: "Facebook",
        native_app_id: 100022493016397,
        username: "bean.doe.9",
        email: "janedoe1995@gmail.com",
        phone_number: "+12095968144",
        name: "Jane Doe",
        linked_time: 1621485301,
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].service_name).toEqual(
        new TextTableValue(expectedValue.service_name)
      );
      expect(rows[index].native_app_id).toEqual(
        new IntegerTableValue(expectedValue.native_app_id)
      );
      expect(rows[index].username).toEqual(
        new TextTableValue(expectedValue.username)
      );
      expect(rows[index].email).toEqual(
        new EmailTableValue(expectedValue.email)
      );
      expect(rows[index].phone_number).toEqual(
        new TextTableValue(expectedValue.phone_number ?? "")
      );
      expect(rows[index].full_name).toEqual(
        new TextTableValue(expectedValue.name)
      );
      expect(rows[index].date_linked).toEqual(
        new DateTableValue(expectedValue.linked_time)
      );
    });
  });
});
