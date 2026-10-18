
/*
CHALLENGE 13: sumTo(n)
Understand: Add all integers from 1 through n.
Plan: Start at zero and add each integer up to n.
*/
function sumTo(n) {
  if (!Number.isInteger(n) || n < 1) return 0;

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(5));  // 15
console.log(sumTo(10)); // 55
console.log(sumTo(0));  // 0, edge case

// Comparison: A loop is beginner-friendly and shows every addition.
// The formula n * (n + 1) / 2 is shorter and runs in constant time.
function sumToFormula(n) {
  if (!Number.isInteger(n) || n < 1) return 0;
  return n * (n + 1) / 2;
}

console.log(sumToFormula(5));  // 15
console.log(sumToFormula(10)); // 55
console.log(sumToFormula(0));  // 0

/*
CHALLENGE 14: isPrime(n)
Understand: A prime number is an integer greater than 1 with no
positive divisors other than 1 and itself.
Plan: Reject numbers below 2, then test divisors up to sqrt(n).
*/
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(12)); // false
console.log(isPrime(1));  // false, edge case
console.log(isPrime(-5)); // false

/*
CHALLENGE 15: printPyramid(rows)
Understand: Return a pyramid with 1, 3, 5... stars per row.
Plan: For each row, append 2*i-1 stars and a newline.
*/
function printPyramid(rows) {
  if (!Number.isInteger(rows) || rows < 1) return "";

  let result = "";

  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 0; j < 2 * i - 1; j++) {
      line += "*";
    }

    result += line;

    if (i < rows) result += "\n";
  }

  return result;
}

console.log(printPyramid(4));
// *
// ***
// *****
// *******
console.log(printPyramid(1)); // *
console.log(JSON.stringify(printPyramid(0))); // "", edge case

/*
CHALLENGE 16: fibonacci(n)
Understand: Return the first n Fibonacci numbers as a string.
Plan: Start with 0 and 1, append the current number, then update the pair.
*/
function fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) return "";

  let a = 0;
  let b = 1;
  let result = "";

  for (let i = 0; i < n; i++) {
    if (i > 0) result += ", ";

    result += a;

    const next = a + b;
    a = b;
    b = next;
  }

  return result;
}

console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)); // 0
console.log(fibonacci(0)); // "", edge case

/*
CHALLENGE 17: guessingGameSimulator(secret)
Understand: Simulate guessing a secret integer from 1 to 100.
Plan: Guess the middle of the remaining range; narrow the range
until the guess matches. Log each guess and return the guess count.
*/
function guessingGameSimulator(secret) {
  if (!Number.isInteger(secret) || secret < 1 || secret > 100) {
    console.log("Secret must be an integer from 1 to 100.");
    return 0;
  }

  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);
    guesses++;

    console.log("Guess:", guess);

    if (guess === secret) return guesses;

    if (guess < secret) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }

  return guesses;
}

console.log("Guesses for 50:", guessingGameSimulator(50));
console.log("Guesses for 1:", guessingGameSimulator(1));
console.log("Invalid secret:", guessingGameSimulator(0));
