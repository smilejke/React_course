const missed = arr => {
  const sorted = arr.sort((a, b) => a - b);

  const creteFullOrder = arr => {
    let min = arr[0];
    let max = arr[arr.length - 1];
    let newArr = [];
    for (let i = min; i <= max; i++) {
      newArr.push(i);
    }
    return newArr;
  };

  const fullOrder = creteFullOrder(sorted);
  const sumOfCurrent = sorted.reduce((a, b) => {
    return a + b;
  });
  const sumOfFull = fullOrder.reduce((a, b) => {
    return a + b;
  });
  return sumOfFull - sumOfCurrent;
};

const result1 = missed([0, 1, 3]);
const result2 = missed([-2, 0, 1, 2]);
const result3 = missed([1, 3, 2, -1]);

console.log({ result1, result2, result3 });
