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

let result1 = longest("abcabcbb");
let result2 = longest("ababcd");
let result3 = longest("bbbb");
let result4 = longest("bbbab");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
