// https://leetcode.com/problems/add-binary/submissions/

/*
Runtime: 88 ms, faster than 9.33% of JavaScript online submissions for Add Binary.
Memory Usage: 37.8 MB, less than 14.29% of JavaScript online submissions for Add Binary.
*/

var addBinary = function(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();

  const result = [];
  let plusOne = 0;

  var l = a.length >= b.length ? a : b;
  var s = a.length < b.length ? a : b;

  console.log(l);
  console.log(s);

  for (let i = 0; i < l.length; i++) {
    let r = parseInt(l[i]) + parseInt(s[i] ? s[i] : "0") + plusOne;

    if (r === 3) {
      result.push(1);
      plusOne = 1;
    } else if (r === 2) {
      result.push(0);
      plusOne = 1;
    } else if (r === 1) {
      result.push(1);
      plusOne = 0;
    } else if (r === 0) {
      result.push(0);
      plusOne = 0;
    }
  }

  if (plusOne === 1) result.push(1);

  return result.reverse().join("");
};
