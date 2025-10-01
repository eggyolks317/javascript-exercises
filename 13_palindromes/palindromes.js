const palindromes = function (str) {
  str = reform(str);
  let front, back;
  let count = 0;
  if (str.length % 2 == 0) {
    front = str.slice(0, str.length / 2).split("");
    back = str.slice(str.length / 2, str.length).split("");
  } else {
    front = str.slice(0, str.length / 2).split("");
    back = str.slice(str.length / 2 + 1, str.length).split("");
  }
  for (let i = 0; i < front.length; i++) {
    if (front[i] == back[front.length - 1 - i]) {
      count++;
    }
  }
  return count == front.length;
};

function reform(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
