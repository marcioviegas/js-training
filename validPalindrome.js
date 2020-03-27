//https://leetcode.com/problems/valid-palindrome-ii/

/*
Runtime: 228 ms, faster than 5.09% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 46.9 MB, less than 25.00% of JavaScript online submissions for Valid Palindrome II.
*/

const cut = (s, index) => s.substring(0, index) + s.substring(index + 1);
const reverseString = s =>
  s
    .split("")
    .reverse()
    .join("");
const isPalindrome = s => s === reverseString(s);

var validPalindrome = function(s) {
  if (isPalindrome(s)) return true;

  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - i - 1;
    if (s[i] !== s[j]) {
      return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j));
    }
  }
  return true;
};
