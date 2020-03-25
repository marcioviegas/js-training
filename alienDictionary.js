// https://leetcode.com/problems/verifying-an-alien-dictionary/

/*
Runtime: 64 ms, faster than 24.81% of JavaScript online submissions for Verifying an Alien Dictionary.
Memory Usage: 34.8 MB, less than 50.00% of JavaScript online submissions for Verifying an Alien Dictionary.
*/

var isAlienSorted = function(words, order) {
  let alpha = {
    "-1": false
  };
  let numberedWords = [];

  if (words.length < 2) {
    return true;
  }

  for (let i = 0; i < order.length; i++) {
    alpha[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    let antecessor = words[i - 1];
    let sucessor = words[i];

    for (let k = 0; k < antecessor.length; k++) {
      let orderAntecessor = alpha[antecessor[k]];
      let orderSucessor = alpha[sucessor[k]];

      if (!orderSucessor) {
        return false;
      }

      if (orderAntecessor < orderSucessor) {
        break;
      } else {
        return false;
      }
    }
  }

  return true;
};
