let a = [6, 7, 5, 8, 4, 9, 3, 0, 2, 1];

for (let i = 1; i < a.length; i++) {
  temp = a[i];
  j = i;
  while (j > 0 && a[j - 1] > temp) {
    a[j] = a[j - 1];
    j = j - 1;
  }
  a[j] = temp;
}

console.log("Insertion sort =>", a);
