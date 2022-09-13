import { eventInvitationsJson } from "../../../../src/extractor/facebook/json/eventInvitationsJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Event Invitations (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/events/event_invitations.json"
    );

    eventInvitationsJson.setJsonDocument(data);
    eventInvitationsJson.process();

    const { rows } = eventInvitationsJson.table;

    expect(rows.length).toEqual(6);

    expect(rows[0].event_name).toEqual(new TextTableValue("Ultimate Frisbee"));
    expect(rows[0].date_start).toEqual(new DateTableValue(1661882400));
    expect(rows[0].date_end).toEqual(new DateTableValue(1661887800));
    expect(rows[1].event_name).toEqual(
      new TextTableValue("Festival spolo\u00c4\u008densk\u00c3\u00bdch hier")
    );
    expect(rows[1].date_start).toEqual(new DateTableValue(1661526000));
    expect(rows[1].date_end).toEqual(new DateTableValue(0));
  });
});
