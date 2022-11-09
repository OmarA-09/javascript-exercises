const sumAll = function(numA, numB) {
    //ternary operator
    const smaller = numA>numB ? numB: numA;
    const bigger = numA>numB ? numA: numB;

    if (smaller < 0 || !Number.isInteger(smaller) || !Number.isInteger(bigger)) {
        return("ERROR");
    }

    let sum = 0;
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
