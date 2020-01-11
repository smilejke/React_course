const matrix = [
  ["F", "A", "C", "E"],
  ["O", "B", "O", "P"],
  ["N", "A", "R", "B"],
  ["E", "A", "N", "D"]
];

const check = (arr, str) => {
  let horizontalArray = arr.map(elem => elem.join(""));

  const cutVerticalWords = (arr, pos) => {
    let verticalArray = arr.map(elem => {
      for (let i = 0; i < elem.length; i += 1) {
        return elem[pos];
      }
    });
    return verticalArray;
  };

  const arrayPusher = arr => {
    let vertical = [];
    for (let i = 0; i < arr.length; i += 1) {
      vertical.push(cutVerticalWords(arr, i));
    }
    return vertical;
  };

  const verticalArray = arrayPusher(arr).map(elem => elem.join(""));
  const verticalSearch = verticalArray.some(elem => elem.includes(str));
  const horizontalSearch = horizontalArray.some(elem => elem.includes(str));

  return verticalSearch || horizontalSearch;
};

let result1 = check(matrix, "FACE");
let result2 = check(matrix, "CORN");
let result3 = check(matrix, "AND");
let result4 = check(matrix, "FONT");

console.log({ result1, result2, result3, result4 });
