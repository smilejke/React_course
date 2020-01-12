// const longest = str => {
//   const arr = str.split("");
//   const uniqueArray = [...new Set(arr)];
//   const uniqueString = uniqueArray.join("");
//   return uniqueString;
// };

//======================== Не думаю, что такое решение Вас устроило бы, поэтому ниже расписан более подробный вариант

const longest = str => {
  const arr = str.split("");

  const fn = arr => {
    const newArr = [];
    for (let i in arr) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr.join("");
  };

  return fn(arr);
};

const result1 = longest("abcabcbb");
const result2 = longest("ababcd");
const result3 = longest("bbbb");
const result4 = longest("bbbab");

console.log({ result1, result2, result3, result4 });
