import { ordersCsv } from "../../../../src/extractor/amazonOrders/csv/ordersCsv";
import { loadTestFileAsText } from "../../../helper";

describe("Orders (CSV)", () => {
  test("it should load file correctly", async () => {
    const data = await loadTestFileAsText(
      "/csv/amazon_orders/Amazon_Orders_csv.csv"
    );

    ordersCsv.fileContents = data;

    await ordersCsv.process();
    const { rows } = ordersCsv.table;

    expect(rows.length).toBe(2);
    // expect(rows).toMatchSnapshot(
    //   [
    //     {
    //       order_date: expect.any(DateTableValue),
    //       shipment_date: expect.any(DateTableValue),
    //     },
    //   ],
    //   "ordersCsv.test.ts.snap"
    // );
  });
});
