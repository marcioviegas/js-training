// https://leetcode.com/problems/product-of-array-except-self/

/*
Runtime: 84 ms, faster than 59.86% of JavaScript online submissions for Product of Array Except Self.
Memory Usage: 47.1 MB, less than 8.00% of JavaScript online submissions for Product of Array Except Self.
*/
var productExceptSelf = function(nums) {
  const right = Array(nums.length).fill(1);
  const left = Array(nums.lenght).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = right[i] * left[i];
  }

  return result;
};
