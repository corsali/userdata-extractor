const xpathEvaluateIntoArray = (expression: string, contextNode: Node) => {
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
