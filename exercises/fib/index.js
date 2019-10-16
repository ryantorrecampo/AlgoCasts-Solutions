// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let cache = {};
    return function fibMemoized(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) return n;
            else {
                cache[n] = fibMemoized(n - 1) + fibMemoized(n - 2);
                return cache[n];
            }
        }
    };
}

// const memoized = fib();
// console.log(memoized(10));

module.exports = fib();

function fib(n) {
    let ans = [0, 1];
    for (let i = 2; i <= n; i++) {
        ans.push(ans[i - 1] + ans[i - 2]);
    }
    return ans[n];
}
