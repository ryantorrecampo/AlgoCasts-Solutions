// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let str = array.map(item => item);
//     let res = [];
//     for (let i = 0; i < str.length; i += size) {
//         res.push(
//             str
//                 .substr(i, size)
//                 .split("")
//                 .map(Number)
//         );
//     }
//     return res;
// }
function chunk(array, size) {}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

module.exports = chunk;
