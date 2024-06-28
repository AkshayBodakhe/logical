const sortedArray = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6];

const unsortedArray = [3, 1, 2, 3, 2, 4, 5, 1];

const removeDuplicatesFromSorted = (arr) => {
  if (arr.length === 0) {
    return arr;
  }
  let uniqueIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[uniqueIndex]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  arr.length = uniqueIndex + 1;
  return arr;
};
const uniqueArray = removeDuplicatesFromSorted(sortedArray);
console.log("uniqueArray =>", uniqueArray);

const removeDuplicatesFromUnsorted = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let seen = {};
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if(!seen[arr[i]]){
        seen[arr[i]] = true
        uniqueArray.push(arr[i])
    }
  }
  console.log(seen)
  return uniqueArray
};

const uniqueArrayFromUnsorted = removeDuplicatesFromUnsorted(unsortedArray)
console.log("uniqueArrayFromUnsorted =>", uniqueArrayFromUnsorted);
