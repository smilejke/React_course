const max = (arr, current) => {
  const sortTheArray = arr => {
    const soredArr = arr.sort((a, b) => a - b);
    return soredArr;
  };

  const sumOfElems = arr => {
    const sum = arr.reduce((sum, cur) => sum + cur, 0);
    return sum;
  };

  const sort = sortTheArray(arr);
  const sum = sumOfElems(sort);

  const howMuchWeCanBuy = (sorted, sumed) => {
    const newSorted = sorted;
    if (sumed > current) {
      newSorted.pop();
    } else return newSorted.length;

    howMuchWeCanBuy(newSorted, sumOfElems(newSorted));

    return newSorted.length;
  };

  return howMuchWeCanBuy(sort, sum);
};

const result1 = max([1, 2], 7);
const result2 = max([1, 2, 10, 1], 2);
const result3 = max([1, 2, 3, 4], 7);
const result4 = max([3, 7, 2, 9, 4], 15);

console.log({ result1, result2, result3, result4 });
