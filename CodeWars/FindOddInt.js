// function findOdd(A) {
//     const map = {};
//     A.forEach(item => {
//         map[item] = map[item] + 1 || 1;
//     });
//     for (let key in map) {
//         if (map[key] % 2 === 1) return parseInt(key);
//     }
//     return 0;
// }
function findOdd(A) {
    return A.reduce((a, b) => a ^ b);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
