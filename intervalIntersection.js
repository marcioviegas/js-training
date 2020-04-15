// https://leetcode.com/problems/interval-list-intersections/submissions

/*
Output Limit Exceeded
*/
var intervalIntersection = function(A, B) {
  var a = A;
  var b = B;

  var result = [];

  for (let i = 0; i < a.length; i++) {
    var leftA = a[i][0];
    var rightA = a[i][1];

    for (let j = 0; j < b.length; j++) {
      let begin = -1;
      let end = -1;

      let leftB = b[j][0];
      let rightB = b[j][1];

      if (leftA <= leftB && leftB <= rightA) {
        begin = leftB;
      } else if (leftB <= leftA && leftA <= rightB) {
        begin = leftA;
      }

      if (leftB <= rightA && rightA <= rightB) {
        end = rightA;
      } else if (leftA <= rightB && rightB <= rightA) {
        end = rightB;
      }

      if (begin !== -1 && end !== -1) {
        result.push([begin, end]);
      } else if (begin !== -1) {
        result.push([begin, begin]);
      } else if (end !== -1) {
        result.push([end, end]);
      }
    }
  }

  return result;
};

/*
Runtime: 80 ms, faster than 88.67% of JavaScript online submissions for Interval List Intersections.
Memory Usage: 41.2 MB, less than 100.00% of JavaScript online submissions for Interval List Intersections.
*/

var intervalIntersection = function(A, B) {
  var a = A;
  var b = B;

  var result = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    var leftA = a[i][0];
    var rightA = a[i][1];

    let leftB = b[j][0];
    let rightB = b[j][1];

    let begin = -1;
    let end = -1;

    if (leftA <= leftB && leftB <= rightA) {
      begin = leftB;
    } else if (leftB <= leftA && leftA <= rightB) {
      begin = leftA;
    }

    if (leftB <= rightA && rightA <= rightB) {
      end = rightA;
    } else if (leftA <= rightB && rightB <= rightA) {
      end = rightB;
    }

    if (begin !== -1 && end !== -1) {
      result.push([begin, end]);
    } else if (begin !== -1) {
      result.push([begin, begin]);
    } else if (end !== -1) {
      result.push([end, end]);
    }

    if (rightA <= rightB) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
