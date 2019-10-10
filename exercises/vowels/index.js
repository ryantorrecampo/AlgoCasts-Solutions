// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let vowelStr = "aeiou";
    let count = 0;
    str.toLowerCase()
        .split("")
        .map(item => {
            if (vowelStr.indexOf(item) >= 0) count++;
        });
    return count;
}

module.exports = vowels;
