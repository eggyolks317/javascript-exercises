const repeatString = function(str, num) {
    let ans = str;
    if (num < 0) {
        return 'ERROR';
    }
    else if (num == 0) {
        return '';
    }
    for (let i = 0; i< num-1; i ++) {
        ans += str;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
