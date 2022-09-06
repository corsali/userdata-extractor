import { notificationsJson } from "../../../../src/extractor/facebook/json/notificationsJson";
import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
  UrlTableValue,
} from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Notifications (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/carl.in.fb/notifications/notifications.json"
    );

    notificationsJson.setJsonDocument(data);
    notificationsJson.process();

    const { rows } = notificationsJson.table;

    expect(rows.length).toEqual(5);

    expect(rows[0].date_notified).toEqual(new DateTableValue(1661858307));
    expect(rows[0].unread).toEqual(new BoolTableValue(true));
    expect(rows[0].notification_url).toEqual(
      new UrlTableValue(
        "https://www.facebook.com/events/60454327672271028/?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D"
      )
    );
    expect(rows[0].content).toEqual(
      new TextTableValue(
        "Johhny English invited you to his event Ultimate Frisbee in Dean Ultimate Frisbee."
      )
    );
  });
});
