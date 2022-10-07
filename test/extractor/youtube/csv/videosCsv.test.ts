import { videosCsv } from "../../../../src/extractor/youtube/csv/videosCsv";
import { loadTestFileAsText } from "../../../helper";

describe("Videos (CSV)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/youtube/Takeout/YouTube and YouTube Music/videos/Video Metadata.csv"
    );

    videosCsv.fileContents = data;

    await videosCsv.process();
    const { rows } = videosCsv.table;

    expect(rows).toMatchSnapshot();
  });
});
