const sumAll = function(a, b) {
    let sum = 0;
    if ((a<0) || (b<0)) {
        return 'ERROR';
    }
    else if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a<b) {
            while (a <= b) {
                sum += a;
                a++;
            }
        }
        else {
            while (a >= b) {
                sum += a;
                a--;
            }
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
