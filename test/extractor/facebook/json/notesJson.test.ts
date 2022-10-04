import { notesJson } from "../../../../src/extractor/facebook/json/notesJson";
import { DateTableValue, TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("Notes (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/other_activity/notes.json"
    );

    notesJson.setJsonDocument(data);
    notesJson.process();

    const { rows } = notesJson.table;

    const expectedValues = [
      {
        title: "States Ive been to",
        text: "\nPut an X by the states you have been to. The average is 8; how do you match up? Should you choose to play, here's what you do: Copy my note. Click on \u00e2\u0080\u009cnotes\u00e2\u0080\u009d under tabs on your profile page. Select \"write a new note\" in the top right corner. Paste the copy in the body of the note. Delete my Xs and add your own. Change the number at the top, and add your title. Once you've saved, don't forget to tag friends (including me) on the right. Tag the same # of people as the # of states you've been to or not! Just for fun, put an O beside the states where you have lived. Airports don't count!\n\nAlabama - \nAlaska -\nArizona - \nArkansas - \nCalifornia - \nColorado - \nConnecticut-\nDelaware - \nFlorida - \nGeorgia - \nHawaii -\nIdaho -\nIllinois \u00e2\u0080\u0093 x\nIndiana - x\nIowa - x\nKansas - \nKentucky - x\nLouisiana - \nMaine -\nMaryland- \nMassachusetts-\nMichigan - x\nMinnesota -\nMississippi - \nMissouri - \nMontana -\nNebraska - \nNevada - \nNew Hampshire -\nNew Jersey - x\nNew Mexico - \nNew York - x\nNorth Carolina- x\nNorth Dakota -\nOhio - X/O\nOklahoma - \nOregon -\nPennsylvania - x\nRhode Island - \nSouth Carolina - x\nSouth Dakota - \nTennessee - x\nTexas - \nUtah - \nVermont -\nVirginia - x\nWashington -\nWest Virginia - x\nWisconsin - \nWyoming- ",
        created_timestamp: 1248222677,
        updated_timestamp: 1603799877,
        tags: "",
      },
      {
        title: "Memories",
        text: "\nDear Everyone,\n\nPlease feel free to leave one memory that you have of me. It doesn't matter if you knew me a little or a lot, recently or long ago-- leave anything you remember. Don't send a message, leave a comment on here. Next, re-post this in your notes and see how many people leave a memory about you. It's actually pretty funny to see the responses and just exactly what people will remember.\n\nEven if your not tagged-feel free to leave something you remember about me :)",
        created_timestamp: 1235080863,
        updated_timestamp: 1603783886,
        tags: "Dan Sitzlar;Christina Schall;Amina Dervisic Hall;Adam Hiner;Kelly Revay;Jimmy Tee;Paul Kistler",
      },
      {
        title: "",
        text: "",
        created_timestamp: 1235080602,
        updated_timestamp: 1235080602,
        tags: "",
      },
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].title).toEqual(
        new TextTableValue(expectedValue.title)
      );
      expect(rows[index].content).toEqual(
        new TextTableValue(expectedValue.text)
      );
      expect(rows[index].date_created).toEqual(
        new DateTableValue(expectedValue.created_timestamp)
      );
      expect(rows[index].date_updated).toEqual(
        new DateTableValue(expectedValue.updated_timestamp)
      );
      expect(rows[index].tags).toEqual(new TextTableValue(expectedValue.tags));
    });
  });
});
