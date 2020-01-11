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

let result1 = max([1, 2], 7);
let result2 = max([1, 2, 10, 1], 2);
let result3 = max([1, 2, 3, 4], 7);
let result4 = max([3, 7, 2, 9, 4], 15);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
