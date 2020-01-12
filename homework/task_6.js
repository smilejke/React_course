const missed = arr => {
  let sorted = arr.sort((a, b) => a - b);

  const creteFullOrder = arr => {
    let min = arr[0];
    let max = arr[arr.length - 1];
    let newArr = [];
    for (let i = min; i <= max; i++) {
      newArr.push(i);
    }
    return newArr;
  };

  let fullOrder = creteFullOrder(sorted);

  const missingValue = [...new Set(fullOrder)].filter(
    item => !sorted.includes(item)
  );
  return Number(missingValue);

  //======================> либо второй вариант, более "в лоб"

  // const findMissing = (where, schema) => {
  //   let newArr = [];
  //   for (let i = 0; i < schema.length; i += 1) {
  //     if (where[i] === schema[i]) continue;
  //     if (!(where[i] === schema[i])) {
  //       newArr.push(schema[i]);
  //     }
  //     return newArr;
  //   }
  // };
  // const missing = findMissing(sorted, fullOrder);
  // return Number(missing);
};

const result1 = missed([0, 1, 3]);
const result2 = missed([-2, 0, 1, 2]);
const result3 = missed([1, 3, 2, -1]);

console.log({ result1, result2, result3 });
