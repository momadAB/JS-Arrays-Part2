/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
function isArrayLengthOdd(numbers) {
    // Your code here
    // If odd, return true. False otherwise
    if (numbers.length % 2 === 1) return true
    else return false
  }

  /**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
    // Your code here
    return !isArrayLengthOdd(numbers)
  }

  /**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
    // Your code here
    let newInstructors = [...instructors, 'Laila'];
    return newInstructors;
  }

  
  /**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
    // Your code here
    return teams.pop();
  }


/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
function secondHalfOfArrayIfItIsEven(fruits) {
    // Your code here
    if (isArrayLengthEven(fruits)) return fruits.slice(fruits.length/2, fruits.length);
    else return []
  }


/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwift!!!!!!!!!!!") -> "Taylor Schwift!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
    // Your code here
    // If the 'shout' includes an '!', removes everything after
    // Assumes that there will be nothing but more '!'s after the first '!'
    if (shout.indexOf('!') !== -1) return shout.slice(0, shout.indexOf('!') + 1)
    // Just return the default shout if there is no '!'
    return shout
}

// console.log(isArrayLengthOdd([1,2]), isArrayLengthEven([1,2]))
// console.log(addLailaToArray([1,2]))
// console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
// console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", 'blueberry']));