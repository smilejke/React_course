// const largestN = (arr, int) => {
//   const sorted = arr.sort((a, b) => a - b);

//   const maxNFinder = (arr, nMax) => {
//     const pos = arr[arr.length - nMax];
//     const index = arr.indexOf(pos);

//     if (index > -1) {
//       return Number(arr.splice(index, 1));
//     } else return null;
//   };
//   return maxNFinder(sorted, int);
// };

// ======================================> после паузы на подумать

const largestN = (arr, int) => {
  const newArray = new Set(arr);
  return Array.from(newArray).sort((a, b) => b - a)[int - 1];
};

const result1 = largestN([2, 4, 1, 5, 3], 1);
const result2 = largestN([2, 4, 1, 5, 3], 2);
const result3 = largestN([1, 8, 3, 2], 4);

console.log({ result1, result2, result3 });
