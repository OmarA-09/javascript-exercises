const palindromes = function (str) {
    
    //\W removes all non-alphanumeric characters
    //The _ means that _ and - are treated as equal characters
    //We will also need to add the g flag for global search.
    let re = /[\W_]/g; // regex
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
