// function digital_root(n) {
//     if (n.toString().length === 1) return n;
//     n = n.toString()
//         .split("")
//         .map(Number)
//         .reduce((prev, curr) => prev + curr, 0);
//     return digital_root(n);

// }

function digital_root(n) {
    return ((n - 1) % 9) + 1;
}

console.log(digital_root(942));
console.log(941 % 9);
