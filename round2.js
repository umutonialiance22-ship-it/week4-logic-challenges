
/*
CHALLENGE 6: reverseString(str)
Understand: Return the characters in reverse order.
Plan: Start at the last character and build a new string backwards.
*/
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(reverseString("Kigali")); // ilagiK
console.log(reverseString("hello"));  // olleh
console.log(reverseString(""));       // "", edge case

/*
CHALLENGE 7: countChar(str, char)
Understand: Count occurrences of a character without case sensitivity.
Plan: Lowercase both inputs, loop through the string and count matches.
*/
function countChar(str, char) {
  if (char.length !== 1) return 0;

  let count = 0;
  const target = char.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === target) count++;
  }

  return count;
}

console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L"));  // 2
console.log(countChar("", "a"));       // 0, edge case

/*
CHALLENGE 8: isPalindrome(str)
Understand: Ignore spaces, punctuation and case.
Plan: Keep only letters and digits, lowercase, then compare both ends.
*/
function isPalindrome(str) {
  let clean = "";

  for (let i = 0; i < str.length; i++) {
    const ch = str[i].toLowerCase();

    if (
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9")
    ) {
      clean += ch;
    }
  }

  for (let left = 0, right = clean.length - 1; left < right; left++, right--) {
    if (clean[left] !== clean[right]) return false;
  }

  return true;
}

console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello"));             // false
console.log(isPalindrome(""));                  // true, edge case

/*
CHALLENGE 9: titleCase(str)
Understand: Capitalize the first letter of every word.
Plan: Track whether the next character starts a word.
*/
// A character-by-character loop is explicit and avoids split/map.
// split plus a loop is also readable, but creates an intermediate array.
function titleCase(str) {
  let result = "";
  let newWord = true;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (/\s/.test(ch)) {
      result += ch;
      newWord = true;
    } else {
      result += newWord ? ch.toUpperCase() : ch.toLowerCase();
      newWord = false;
    }
  }

  return result;
}

console.log(titleCase("welcome to kigali tech hub"));
// Welcome To Kigali Tech Hub
console.log(titleCase("HELLO WORLD")); // Hello World
console.log(titleCase(""));            // "", edge case

/*
CHALLENGE 10: maskPhone(phone)
Understand: Accept exactly 10 digits starting with 07.
Plan: Validate first; keep the first 3 and last 3 digits.
*/
function maskPhone(phone) {
  if (!/^07\d{8}$/.test(phone)) return "Invalid";

  return phone.slice(0, 3) + "****" + phone.slice(-3);
}

console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0712345678")); // 071****678
console.log(maskPhone("07123"));      // Invalid, edge case

/*
CHALLENGE 11: longestWord(sentence)
Understand: Return the longest word; if tied, keep the first.
Plan: Build words character by character; update the winner only if longer.
*/
function longestWord(sentence) {
  let current = "";
  let longest = "";

  for (let i = 0; i <= sentence.length; i++) {
    const ch = i < sentence.length ? sentence[i] : " ";

    if (/[a-zA-Z0-9]/.test(ch)) {
      current += ch;
    } else {
      if (current.length > longest.length) longest = current;
      current = "";
    }
  }

  return longest;
}

console.log(longestWord("I love Kigali city")); // Kigali
console.log(longestWord("red blue"));           // red, tied
console.log(longestWord(""));                   // "", edge case

/*
CHALLENGE 12: compress(str)
Understand: Encode consecutive repeated characters as character + count.
Plan: Count each run, append its character and count, then start a new run.
*/
function compress(str) {
  if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("xyz"));        // x1y1z1
console.log(compress(""));           // "", edge case
