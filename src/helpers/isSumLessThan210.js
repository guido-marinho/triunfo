const isSumLessThanOrEqual = (cardAttr1, cardAttr2, cardAttr3) => {
  const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
  const maxSum = 210;
  const isSumLessThan210 = sum <= maxSum;
  return isSumLessThan210;
};

export default isSumLessThanOrEqual;
