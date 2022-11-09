/* const removeFromArray = function(array) {
    let newArray = array;
    //For every argument there is
    for (let i = 1; i < arguments.length; i++) {
        //Check if each argument can be filtered from the array
        newArray = newArray.filter(item => item!==arguments[i]);     
    }
    return newArray;
}; */

//Using rest parameter
const removeFromArray = function(array,  ...elementsToRemove) {
    let newArray = array;
    for (let i = 0; i < elementsToRemove.length; i++) {
        //Check if each argument can be filtered from the array
        newArray = newArray.filter(item => item!==elementsToRemove[i]);     
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
