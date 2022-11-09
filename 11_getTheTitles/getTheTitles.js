const getTheTitles = function(bookArray) {
    let array = [];
    bookArray.forEach(bookElement => {
        array.push(bookElement.title);
    });
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
