
const sortArray = (a) => {
  let temp;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a;
};

const array = [2, 3, 5, 8, 9, 6, 1, 7, 4, 0];

const sortedArray = sortArray(array);

console.log(JSON.stringify(sortedArray));
