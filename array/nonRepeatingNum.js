function findNonRepeatingNumbers(arr) {
  let nonRepeatingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate){
        nonRepeatingNumbers[nonRepeatingNumbers.length] = arr[i]
    }
  }
  return nonRepeatingNumbers;
}

const array = [1, 2, 3, 3, 2, 4, 5, 3, 5, 3, 6, 7];
const result = findNonRepeatingNumbers(array);
console.log('Non-repeating numbers:', result);