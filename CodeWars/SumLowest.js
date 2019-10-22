// function sumTwoSmallestNumbers(numbers) {
//     return numbers
//         .sort((a, b) => a - b)
//         .splice(0, 2)
//         .reduce((prev, curr) => prev + curr, 0);
// }

function sumTwoSmallestNumbers(numbers) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    let n;
    for (let i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if (n < min) {
            secondMin = min;
            min = n;
        } else if (n < secondMin) {
            secondMin = n;
        }
    }
    return min + secondMin;
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
