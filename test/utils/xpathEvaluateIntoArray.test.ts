import { xpathEvaluateIntoArray } from "../../src/utils/xpathEvaluateIntoArray";

describe("xpathEvaluateIntoArray", () => {
  it("gets selected elements into an array", () => {
    const rootElement = document.createElement("body");

    rootElement.innerHTML = `
    <ul>
      <li>Hi1</li>
      <li>Hi2</li>
    </ul>`;

    const result = xpathEvaluateIntoArray(
      ".//li",
      rootElement.querySelector("ul") as HTMLElement
    ) as Element[];

    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(
      rootElement.querySelector("ul > li:first-of-type")
    );
    expect(result[1]).toEqual(
      rootElement.querySelector("ul > li:nth-of-type(2)")
    );
  });
});
