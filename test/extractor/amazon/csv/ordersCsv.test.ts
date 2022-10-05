import { ordersCsv } from "../../../../src/extractor/amazon/csv/ordersCsv";
import { loadTestFileAsText } from "../../../helper";

describe("Orders (CSV)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText("/csv/amazon/Amazon_Orders_csv.csv");

    ordersCsv.fileContents = data;

    ordersCsv.process();
    const { rows } = ordersCsv.table;

    expect(rows).toMatchSnapshot();
  });
});
