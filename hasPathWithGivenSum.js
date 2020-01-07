// Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.
// https://app.codesignal.com/interview-practice/task/TG4tEMPnAc3PnzRCs/description

// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(tree, last) {

    if (tree === null) {
        return false;
    }

    if (tree.left === null && tree.right === null) {
        return (last - tree.value) === 0;
    }


    return hasPathWithGivenSum(tree.left, last - tree.value) || hasPathWithGivenSum(tree.right, last - tree.value);
}

