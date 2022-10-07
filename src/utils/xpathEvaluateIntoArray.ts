/**
 * Selects elements based on given XPath expression against given contextNode
 * and returns the result as an array.
 * @param expression XPath expression
 * @param contextNode Context for the XPath to search within
 * @returns Array of selected Nodes
 */
const xpathEvaluateIntoArray = (
  expression: string,
  contextNode: Node
): Node[] => {
  const result = document.evaluate(
    expression,
    contextNode,
    null,
    XPathResult.ANY_TYPE
  );

  const outputArray = [];
  let element = result.iterateNext();
  while (element) {
    outputArray.push(element);
    element = result.iterateNext();
  }

  return outputArray;
};

export { xpathEvaluateIntoArray };
