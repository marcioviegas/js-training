// Brutal :)
var findAnagrams = function(s, p) {
  var subArrays = [];
  var stop = s.length - p.length;

  for (let i = 0; i < stop + 1; i++) {
    let subArray = s.slice(i, p.length + i);
    subArrays.push({
      index: i,
      a: subArray
        .split("")
        .sort()
        .join("")
    });
  }

  p = p
    .split("")
    .sort()
    .join("");

  var result = [];

  subArrays.forEach(s => {
    if (s.a === p) {
      result.push(s.index);
    }
  });

  return result;
};

// Using window sliding

var findAnagrams = function(s, p) {
  const m1 = new Map();
  const m2 = new Map();
  const result = [];

  for (let i = 0; i < p.length; i++) {
    let ch = p[i];

    if (m1.has(ch)) {
      m1.set(ch, m1.get(ch) + 1);
    } else {
      m1.set(ch, 1);
    }
  }

  const lengthInput = s.length;

  for (let i = 0; i < s.length; i++) {
    if (m2.has(s[i])) {
      m2.set(s[i], m2.get(s[i]) + 1);
    } else {
      m2.set(s[i], 1);
    }

    if (i >= p.length) {
      var left = i - p.length;

      if (m2.get(s[left]) > 1) {
        m2.set(s[left], m2.get(s[left]) - 1);
      } else {
        m2.delete(s[left]);
      }
    }

    if (_isEquals(m1, m2)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
};

const _isEquals = function(m1, m2) {
  if (m1.size !== m2.size) return false;

  for (var [key, value] of m1) {
    if (!m2.has(key)) return false;
    if (m2.get(key) !== value) return false;
  }

  return true;
};
