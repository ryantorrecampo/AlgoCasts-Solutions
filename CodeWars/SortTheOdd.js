// function sortArray(array) {
//     if (array.length === 0) return array;
//     let arr = [];
//     let odd = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) arr[i] = array[i];
//         if (array[i] % 2 === 1) {
//             odd.push(array[i]);
//             arr[i] = "fill";
//         }
//     }
//     odd.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === "fill") arr[i] = odd.shift();
//     }
//     return arr;
// }

function sortArray(array) {
    const odd = array.filter(x => x % 2 == 1).sort((a, b) => a - b);
    return array.map(x => (x % 2 === 1 ? odd.shift() : x));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
