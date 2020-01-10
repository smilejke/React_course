const sumToSmthOne = n => {
  return (sumToSmthTwo = num => {
    return n + num;
  });
};

const sumToTen = sumToSmthOne(10);
const sumToSecond = sumToSmthTwo(15);

console.log(sumToSecond);
