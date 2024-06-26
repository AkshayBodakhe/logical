let a = 0;
let b = 1;
let c;

function printFibonacci(n) {
  for (i = 1; i <= n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

// printFibonacci(20)

function printFibonacciRec(n) {
  if (n <= 1) {
    return n;
  }
  return printFibonacciRec(n - 1) + printFibonacciRec(n - 2);
}

const number = 4;
const fibonacciValue = printFibonacciRec(number);
console.log(fibonacciValue)