
/*
CHALLENGE 1: isLeapYear(year)
Understand: Input is a year; output is true or false.
Examples: 2024 -> true, 1900 -> false, 2000 -> true.
Plan:
1. If divisible by 400, return true.
2. If divisible by 100, return false.
3. Otherwise, return whether divisible by 4.
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false, extra test

/*
CHALLENGE 2: getBMICategory(weightKg, heightM)
Understand: Input is weight and height; output is a BMI category.
Plan:
1. Reject non-positive height or weight.
2. Calculate weight / (height * height).
3. Compare BMI with 18.5, 25 and 30.
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0 || weightKg <= 0) return "Invalid";

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

console.log(getBMICategory(50, 1.7)); // Underweight
console.log(getBMICategory(70, 1.7)); // Normal
console.log(getBMICategory(80, 0));   // Invalid, edge case
console.log(getBMICategory(100, 1.7)); // Obese

/*
CHALLENGE 3: motoFare(km)
Understand: First 2 km cost 300 RWF; each extra started kilometre costs 107.
Plan:
1. Return 0 for distances <= 0.
2. Return 300 for distances up to 2 km.
3. Add 107 times the rounded-up extra distance.
*/
function motoFare(km) {
  if (km <= 0) return 0;
  if (km <= 2) return 300;

  return 300 + Math.ceil(km - 2) * 107;
}

console.log(motoFare(1));   // 300
console.log(motoFare(2));   // 300
console.log(motoFare(2.1)); // 407
console.log(motoFare(0));   // 0, edge case

/*
CHALLENGE 4: convertSeconds(total)
Understand: Convert seconds into hours, minutes and seconds.
Plan:
1. Reject negative input.
2. Calculate hours, remaining minutes and remaining seconds.
3. Pad minutes and seconds to two digits.
*/
function convertSeconds(total) {
  if (!Number.isFinite(total) || total < 0) return "Invalid";

  total = Math.floor(total);

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  return `${hours}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

console.log(convertSeconds(7509)); // 2h 05m 09s
console.log(convertSeconds(60));   // 0h 01m 00s
console.log(convertSeconds(0));    // 0h 00m 00s, edge case

/*
CHALLENGE 5: changeMaker(amount)
Understand: Find the smallest number of Rwandan currency pieces.
Plan:
1. Start with the largest denomination.
2. Divide the remaining amount by it to find the piece count.
3. Keep the remainder and continue with smaller denominations.
*/
// Greedy solution: easy to read for these denominations.
// A more general optimal solution for arbitrary denominations may need
// dynamic programming rather than this greedy approach.
function changeMaker(amount) {
  if (!Number.isSafeInteger(amount) || amount < 0) return "Invalid";

  const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  const result = [];
  let remaining = amount;

  for (let i = 0; i < denominations.length; i++) {
    const note = denominations[i];
    const count = Math.floor(remaining / note);

    if (count > 0) {
      result.push(`${count}×${note}`);
      remaining = remaining % note;
    }
  }

  return result.length === 0 ? "0 pieces" : result.join(", ");
}

console.log(changeMaker(7385));
// 1×5000, 1×2000, 3×100, 1×50, 1×20, 1×10, 1×5
console.log(changeMaker(100)); // 1×100
console.log(changeMaker(0));   // 0 pieces, edge case
