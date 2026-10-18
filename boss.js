
/*
CHALLENGE 18: validatePassword(pw)
Understand: Return { valid, errors } based on the password rules.
Plan: Check every requirement separately and record every failed rule.
*/
function validatePassword(pw) {
  const errors = [];

  if (pw.length < 8) {
    errors.push("Must be at least 8 characters long.");
  }

  let upper = false;
  let lower = false;
  let digit = false;
  let special = false;
  let space = false;

  for (let i = 0; i < pw.length; i++) {
    const ch = pw[i];

    if (ch >= "A" && ch <= "Z") upper = true;
    if (ch >= "a" && ch <= "z") lower = true;
    if (ch >= "0" && ch <= "9") digit = true;
    if ("!@#$%^&*".includes(ch)) special = true;
    if (/\s/.test(ch)) space = true;
  }

  if (!upper) errors.push("Must contain an uppercase letter.");
  if (!lower) errors.push("Must contain a lowercase letter.");
  if (!digit) errors.push("Must contain a digit.");
  if (!special) errors.push("Must contain a special character: !@#$%^&*.");
  if (space) errors.push("Must not contain spaces.");

  return { valid: errors.length === 0, errors };
}

console.log(validatePassword("GoodPass1!"));
console.log(validatePassword("weak"));
console.log(validatePassword("NoSpaces 1!")); // invalid: contains a space

/*
CHALLENGE 19: romanNumeral(n)
Understand: Convert an integer from 1 to 3999 into Roman numerals.
Plan: Process values from largest to smallest, repeatedly subtracting
each value and appending its Roman symbol.
*/
function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [
    1000, 900, 500, 400, 100, 90,
    50, 40, 10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD", "C", "XC",
    "L", "XL", "X", "IX", "V", "IV", "I"
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(2026)); // MMXXVI
console.log(romanNumeral(0));    // Invalid, edge case

/*
CHALLENGE 20: nationalIdCheck(id)
Understand: Check the simplified ID format from the workshop.
Plan:
1. Require exactly 16 digits.
2. Require the first digit to be 1.
3. Read digits 2–5 as the birth year and validate the range.
4. Require the sixth digit to be 7 or 8.
5. Return true if all checks pass, otherwise explain the first failure.
*/
function nationalIdCheck(id) {
  if (!/^\d{16}$/.test(id)) {
    return "ID must contain exactly 16 digits.";
  }

  if (id[0] !== "1") {
    return "The first digit must be 1.";
  }

  const year = Number(id.slice(1, 5));
  const currentYear = new Date().getFullYear();

  if (year < 1900 || year > currentYear) {
    return "Birth year must be between 1900 and " + currentYear + ".";
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "The sixth digit must be 7 or 8.";
  }

  return true;
}

console.log(nationalIdCheck("1199871234567890")); // true under the simplified rules
console.log(nationalIdCheck("2199871234567890")); // first digit error
console.log(nationalIdCheck("123"));               // invalid length, edge case
