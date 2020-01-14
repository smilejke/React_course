let longest = string => {
  let current = 0;
  let outerString = "";
  let longestString = "";
  let indexContainer = {};

  for (let i = 0; i < string.length; i++) {
    current = string[i];
    if (!indexContainer[string[i]]) {
      outerString += current;
      indexContainer[string[i]] = { index: i };
    } else {
      if (longestString.length <= outerString.length) {
        longestString = outerString;
      }

      let prevInd = indexContainer[current].index;
      let prevString = string.substring(prevInd + 1, i);
      outerString = prevString + current;
      indexContainer = {};

      for (let j = prevInd + 1; j <= i; j++) {
        indexContainer[string.charAt(j)] = { index: j };
      }
    }
  }
  if (longestString.length > outerString.length) return longestString;
  else return outerString;
};

const result1 = longest("abadef"); //badef
const result2 = longest("ababcd"); // 'abcd'
const result3 = longest("bbbb"); // 'b'
const result4 = longest("bbbab"); // 'ba'

console.log({ result1, result2, result3, result4 });
