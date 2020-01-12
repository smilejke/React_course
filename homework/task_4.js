const short = arr => {
  let newArr = [];
  const groupClosest = (arr, counter) => {
    let index = counter;

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i + 1] - arr[i] === 1) {
        index += 1;
      } else break;
    }
    newArr.push(arr.splice(0, index));

    while (arr.length > 0) {
      groupClosest(arr, 1);
    }
    return newArr;
  };

  const toStringElems = groupClosest(arr, 1)
    .map(elem => {
      if (elem.length === 1) {
        return elem.join("");
      }
      if (elem.length === 2) {
        return elem.join(", ");
      }
      if (elem.length > 2) {
        return Number(elem[0]) + "-" + Number(elem[elem.length - 1]);
      }
    })
    .join(", ");

  return toStringElems;
};

const result1 = short([1, 2, 3, 4, 5, 6]);
const result2 = short([1, 2, 3, 5, 6, 8]);
const result3 = short([-3, -2, -1, 1, 2, 3]);

console.log({ result1, result2, result3 });
