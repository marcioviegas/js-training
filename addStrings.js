//https://leetcode.com/problems/add-strings/submissions/

/*
Runtime: 60 ms, faster than 93.49% of JavaScript online submissions for Add Strings.
Memory Usage: 37.9 MB, less than 12.50% of JavaScript online submissions for Add Strings.
 */

var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let output = "";

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    var r =
      parseInt(num1[i] ? num1[i] : "0") +
      parseInt(num2[j] ? num2[j] : "0") +
      carry;

    output = r % 10 + output;
    carry = Math.floor(r / 10);
  }

  return output;

};
