// Palindrome Permutation: Given a string, write a function to check if it is a permutation of
// a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
// permutation is a rearrangement of letters. The palindrome does not need to be limited to just
// dictionary words.

const palindromePerm = str => {
    const map = {};
    let countOdd = 0;
    str.replace(/[ ]/g, "")
        .split("")
        .forEach(item => {
            map[item] = map[item] + 1 || 1;
            map[item] % 2 == 1 ? countOdd++ : countOdd--;
        });

    // let justOne = 0;
    // Object.keys(map).forEach(item => {
    //     if (map[item] % 2 === 1) justOne++;
    // });
    return countOdd < 2;
};

console.log(palindromePerm("tact coa"));
