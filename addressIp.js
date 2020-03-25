// https://leetcode.com/problems/defanging-an-ip-address/

// The results are not actually showing the correct time results

/*
Runtime: 52 ms, faster than 73.42% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

function defangIPaddr(address) {
  let result = "";

  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      result += "[.]";
    } else {
      result += address[i];
    }
  }

  return result;
}

/*
Runtime: 60 ms, faster than 17.06% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

function defangIPaddr(address) {
  return address.split(".").join("[.]");
}

/*
Runtime: 48 ms, faster than 90.45% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Defanging an IP Address.
*/

function defangIPaddr(address) {
  return address.replace(new RegExp("\\.", "g"), "[.]");
}

function defangIPaddr(address) {
  return address.replace(/\./g, "[.]");
}
