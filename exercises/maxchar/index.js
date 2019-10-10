// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {};
    str.split("").map(item => {
        map[item] = map[item] ? map[item] + 1 : 1;
    });
    return Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));
}

module.exports = maxChar;
