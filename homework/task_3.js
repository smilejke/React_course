const longestPalindrome = str => {
  if (str.length < 2) return null;
  let longestPalindrome = "";

  const isPalendrome = string => {
    return (
      string ===
      string
        .split("")
        .reverse()
        .join("")
    );
  };

  for (let i = 0; i <= str.length; i++) {
    for (let j = i; j <= str.length; j++) {
      const newString = str.slice(i, j);
      if (!isPalendrome(newString)) continue;
      if (newString.length > longestPalindrome.length)
        longestPalindrome = newString;
    }
  }
  return longestPalindrome || null;
};

const result1 = longestPalindrome("babad");
const result2 = longestPalindrome("cbbd");
const result3 = longestPalindrome("dbabddb");

console.log({ result1, result2, result3 });
