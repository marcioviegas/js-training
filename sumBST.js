//https://leetcode.com/problems/range-sum-of-bst/submissions/

/*
Runtime: 232 ms, faster than 7.82% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 77.7 MB, less than 7.69% of JavaScript online submissions for Range Sum of BST.
*/
var rangeSumBST = function (root, L, R) {
  this.sum = 0;

  const sumDFS = function (root, L, R) {
    if (root === null) return;

    if (root.val >= L && root.val <= R) {
      this.sum += root.val;
    }

    if (root.val < R) {
      sumDFS(root.right, L, R);
    }

    if (root.val > L) {
      sumDFS(root.left, L, R);
    }
  };

  sumDFS(root, L, R);

  return this.sum;
};
