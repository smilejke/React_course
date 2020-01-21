const missed = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const newArr = Array.from(Array(max - min), (v, i) => {
    return i + min;
  });

  const missing = newArr
    .filter(i => {
      return !arr.includes(i);
    })
    .join("");

  return Number(missing);
};

const result1 = missed([0, 1, 3]);
const result2 = missed([-2, 0, 1, 2]);
const result3 = missed([1, 3, 2, -1]);

console.log({ result1, result2, result3 });
