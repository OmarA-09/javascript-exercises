const findTheOldest = function(peopleObjectArray) {
    let biggestAge = 0;
    let oldestPerson;
    for (let i = 0; i < peopleObjectArray.length; i++) {
        const person = peopleObjectArray[i];
        let age;

        if (person.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            age = currentYear - person.yearOfBirth
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        
        if (age > biggestAge) {
            oldestPerson = peopleObjectArray[i];
            biggestAge = age;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
