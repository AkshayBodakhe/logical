const a = [2, 4, 7, 3];

let sumofAll = 0;
let sumofEven = 0;
let sumofOdd = 0;

for (let i = 0; i < a.length; i++) {
  sumofAll = sumofAll + a[i];
  if (a[i] % 2 == 0) {
    sumofEven += a[i];
  } else {
    sumofOdd += a[i];
  }
}

console.log("sum of all elements", sumofAll);

console.log("sum of all even", sumofEven);

console.log("sum of all odd", sumofOdd);
