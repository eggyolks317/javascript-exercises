const findTheOldest = function (arr) {
  return arr.reduce((oldest, curr) => {
    let currentYear = new Date().getFullYear();
    let currentAge = (curr.yearOfDeath || currentYear) - curr.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    if (currentAge > oldestAge) {
      return curr;
    } else {
      return oldest;
    }
  });
};
// Do not edit below this line
module.exports = findTheOldest;
