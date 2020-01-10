// Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
// https://app.codesignal.com/interview-practice/task/tXN6wQsTknDT6bNrf/description

// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function isTreeSymmetric(tree) {

    if (tree === null) {
        return true;
    }

    return isSubTreeSymmetric(tree.left, tree.right);
}


function isSubTreeSymmetric(left, right) {

    if (left === null && right === null) {
        return true;
    }

    if (left === null || right === null) {
        return false;
    }

    if (left.value !== right.value) {
        return false;
    }

    return isSubTreeSymmetric(left.left, right.right) && isSubTreeSymmetric(left.right, right.left);
}