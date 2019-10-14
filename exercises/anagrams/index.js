// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}
const cleanString = str => {
    return str
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("");
};

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     const converter = str => {
//         return JSON.stringify(
//             str
//                 .toLowerCase()
//                 .replace(/[^a-z]/g, "")
//                 .split("")
//                 .sort((a, b) => (a > b) - (a < b))
//         );
//     };

//     return converter(stringA) === converter(stringB);
// }

// function anagrams(stringA, stringB) {
// In the future, it would be better to write this function in the global context so that we can reuse it since it is commonly used
//     const converter = str => {
//         const charMap = {};
//         str.toLowerCase()
//             .replace(/[^a-z]/g, "")
//             .split("")
//             .forEach(item => {
//                 charMap[item] = charMap[item] + 1 || 1;
//             });
//         return charMap;
//     };

//     const mapA = converter(stringA);
//     const mapB = converter(stringB);

//     // Checks an edge case if one string has extra characters
//     if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
//     for (let char in mapA) {
//         if (mapA[char] !== mapB[char]) return false;
//     }

//     return true;
// }
