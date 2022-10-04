import { peopleWhoFollowYouJson } from "../../../../src/extractor/facebook/json/peopleWhoFollowYouJson";
import { TextTableValue } from "../../../../src/models/table";
import { loadTestFileAsJson } from "../../../helper";

describe("People Who Follow You (JSON)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsJson(
      "/json/facebook/friends_and_followers/people_who_follow_you.json"
    );

    peopleWhoFollowYouJson.setJsonDocument(data);
    peopleWhoFollowYouJson.process();

    const { rows } = peopleWhoFollowYouJson.table;

    const expectedValues = [
      "Emelie Wagner-Moneypenny",
      "Gary Rusu",
      "Nazmul Lxar",
      "Shay Sade",
      "Cheryl Laye Estelle",
      "Nate Les Vengrow",
      "Mubasir Husain",
      "McGraw Richard Jnr",
      "Jacqueline Townsend",
      "Charlene Catlin",
      "Nemer Almonte-barron",
      "Glenn Messer",
      "Stella Wade",
      "Lisa Techau",
      "Fred Williams",
      "Cassandra Ashley Orheim",
      "Eagle Rentals North Akron",
      "LvArie Williams",
      "Val\u00c3\u00a9rie Zouma",
      "Tiarra Wood",
      "Thomas Walters",
      "James McCaleb",
      "Fred Williams",
      "Elizebeth Hummer",
      "Sean Cremi",
      "Fred Williams",
      "Billy Smo",
      "Fred Williams",
      "Cory Richards",
      "Stephen James",
      "Annie Marjusek",
      "Steve Hyde",
      "John Walton",
      "Vic Williams",
      "Hanson Eric Tette",
      "Emelie Wagner-Moneypenny",
      "Crystal Grace",
      "Olga Williams",
      "Sherry Edwards",
      "Jerry Ramirez",
      "Florence Schlegel",
      "Rose Lewis",
      "Jennifer Pareny",
      "Marissa Faith",
      "Robbie Glass",
      "Wilson Gonzale\u00c5\u00ba",
      "Roo Roo Rackz",
      "Samira Salihovic Kadric",
      "Joy Pranata Sembiring",
      "Kaleb Montgomery",
      "Laurie Ramsey",
      "Kenny Schreiner",
      "Mike Bishop",
      "Joe White",
      "Jason Barnette",
    ];

    expect(rows.length).toEqual(expectedValues.length);
    expectedValues.forEach((expectedValue, index) => {
      expect(rows[index].person_name).toEqual(
        new TextTableValue(expectedValue)
      );
    });
  });
});
