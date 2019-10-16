// Brute Force TC: O(n^2) | SC: O(1)
// const maxProfit = arr => {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 if (arr[j] - arr[i] > max) {
//                     max = arr[j] - arr[i];
//                 }
//             }
//         }
//     }
//     return max;
// };

// TC: O(n) | SC: O(1)
// const maxProfit = arr => {
//     let min = Number.MAX_SAFE_INTEGER;
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         else if (arr[i] - min > max) max = arr[i] - min;
//     }
//     return max;
// };

// same as above except uses Math.min and Math.max rather than if statements
// const maxProfit = arr => {
//     let result = 0;
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         min = Math.min(arr[i], min);
//         result = Math.max(result, arr[i] - min);
//     }
//     return result;
// };

const maxProfit = arr => {
    let min = Number.MAX_SAFE_INTEGER;
    return arr.reduce((max, price) => {
        min = Math.min(min, price);
        return Math.max(max, price - min);
    }, 0);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// 7 < Number.MAX_SAFE_INTEGER === true -> min = 7
// 7-7 = 0 > 0 ? no -> continue

// 1 < 7 ? true -> min = 1;

// 5 < 1 ? no
// 5 - 1 > 0 ? yes -> max = 4;

// 3 < 1 no
// 3 - 1 > 4 ? no

// 6 < 1 ? no
// 6 - 1 > 4 ? yes -> max = 5

// 4 < 1 ? no
// 4 - 1 > 5 ? no -> end

// return 5;
