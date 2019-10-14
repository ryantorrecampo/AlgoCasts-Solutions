// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const map = {};
    str.split("").forEach(item => {
        map[item] = map[item] + 1 || 1;
    });
    return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
}

// function maxChar(str) {
//     const charMap = {};
//     let max = 0;
//     let maxChar = "";

//     // build frequency map
//     for (let char of str) {
//         if (charMap[char]) {
//             charMap[char] + 1;
//         } else {
//             charMap[char] = 1;
//         }
//     }

//     // find largest frequency
//     for (let key in charMap) {
//         if (charMap[key] > max) {
//             max = charMap[key];
//             maxChar = key;
//         }
//     }

//     return maxChar;
// }

module.exports = maxChar;
