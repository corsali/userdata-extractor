import { personalInformationJson } from "../../../../src/extractor/instagram/json/personalInformationJson";
import {
  BoolTableValue,
  DateTableValue,
  EmailTableValue,
  PhoneNumberValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Personal Information (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.space/account_information/personal_information.json"
    );

    personalInformationJson.loadJson(data);
    personalInformationJson.process();

    const row = personalInformationJson.table.rows[0];

    expect(row.bio).toEqual(
      new TextTableValue(
        "Just teaching the world how to think at a galatic level."
      )
    );
    expect(row.date_of_birth).toEqual(new DateTableValue("1934-11-09"));
    expect(row.email).toEqual(new EmailTableValue("carl@vana.org"));
    expect(row.gender).toEqual(new TextTableValue("unspecified"));
    expect(row.has_shared_live_video).toEqual(new BoolTableValue("false"));
    expect(row.name).toEqual(new TextTableValue("Carl Sagan"));
    expect(row.phone_confirmation_method).toEqual(
      new TextTableValue("Unknown")
    );
    expect(row.phone_confirmed).toEqual(new BoolTableValue("true"));
    expect(row.phone_number).toEqual(new PhoneNumberValue("+13105552368"));
    expect(row.private_account).toEqual(new BoolTableValue("false"));
    expect(row.profile_photo).toEqual(
      new UrlTableValue(
        "media/other/288847725_1197478894341092_4022983763631844924_n_17960399146761376.jpg"
      )
    );
    expect(row.username).toEqual(new TextTableValue("carl.in.space"));
    expect(row.website).toEqual(new UrlTableValue(""));
  });
});
