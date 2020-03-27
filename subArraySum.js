// https://leetcode.com/problems/subarray-sum-equals-k/submissions/

/*
Runtime: 320 ms, faster than 14.92% of JavaScript online submissions for Subarray Sum Equals K.
Memory Usage: 35.7 MB, less than 100.00% of JavaScript online submissions for Subarray Sum Equals K.
*/

var subarraySum = function(nums, k) {
  var total = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];

    if (sum === k) total++;

    for (let m = i + 1; m < nums.length; m++) {
      if (nums[m] + sum === k) total++;

      sum += nums[m];
    }
  }

  return total;
};
