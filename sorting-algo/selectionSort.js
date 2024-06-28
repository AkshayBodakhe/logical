//Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.
//It works by taking elements from the unsorted portion and inserting them into their correct position in the sorted portion, making it efficient for small or nearly sorted datasets.

// let a = [6, 7, 5, 8, 4, 9, 3, 0, 2, 1];

let a = ["g", "b", "d", "c", "f", "e", "h", "a", "x", "z", "y"];

let min;
let temp = 0;

for (let i = 0; i < a.length; i++) {
  min = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] < a[min]) {
      min = j;
    }
  }
  temp = a[i];
  a[i] = a[min];
  a[min] = temp;
  //   console.log(temp, a[i], a[min]);
  console.log(i, "-----");
  console.log(JSON.stringify(a));
}

console.log(a);
