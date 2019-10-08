// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let revArr = [];
//     str.split("").forEach(item => {
//         revArr.unshift(item);
//     });
//     return revArr.join("");
// }

// function reverse(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// function reverse(str) {
//     let reversed = "";

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

function reverse(str) {
    return str.split("").reduce((prev, curr) => curr + prev, "");
}

module.exports = reverse;
