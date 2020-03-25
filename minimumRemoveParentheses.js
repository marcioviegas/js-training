// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/submissions/

/*
Runtime: 224 ms, faster than 10.24% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
Memory Usage: 47.1 MB, less than 100.00% of JavaScript online submissions for Minimum Remove to Make Valid Parentheses.
*/

var minRemoveToMakeValid = function(s) {
  let removals = [];
  let rightPara = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      rightPara.push(i);
    } else if (s[i] === ")") {
      if (rightPara.length === 0) {
        removals.push(i);
      } else {
        rightPara.pop();
      }
    }
  }

  let result = "";

  // THIS PART IS MAKING THE CODE SLOW
  for (let i = 0; i < s.length; i++) {
    if (rightPara.includes(i) || removals.includes(i)) {
      continue;
    } else {
      result += s[i];
    }
  }

  return result;
};
