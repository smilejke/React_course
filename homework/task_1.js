const max = (arr, current) => {
  const sumOfElems = arr => {
    return arr.reduce((sum, cur) => sum + cur, 0);
  };

  const sort = arr.sort((a, b) => a - b);
  const sum = sumOfElems(sort);

  const howMuchWeCanBuy = (sorted, sumed) => {
    const newSorted = sorted;
    if (sumed > current) {
      newSorted.pop();
    } else return newSorted.length;

    howMuchWeCanBuy(newSorted, sumOfElems(newSorted));
    return newSorted.length;
  };

  const amount = howMuchWeCanBuy(sort, sum);
  return amount;
};

const result1 = max([1, 2], 7);
const result2 = max([1, 2, 10, 1], 2);
const result3 = max([1, 2, 3, 4], 7);
const result4 = max([3, 7, 2, 9, 4], 15);

console.log({ result1, result2, result3, result4 });
