// Implement an algorithm to determine if a string has all unique characters. What if you
// can not use additional data structures?

const unique = str => {
    const map = {};
    str.split("").forEach(item => {
        map[item] = map[item] + 1 || 1;
    });

    return Object.keys(map).filter(item => map[item] !== 1).length === 0
        ? true
        : false;
};

const uniqueNoDS = str => {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) return false;
        }
    }

    return true;
};

const uniqueS1 = str => {
    let char_set = [];
    for (let i = 0; i < str.length; i++) {
        if (char_set[str[i]]) return false;
        char_set[str[i]] = true;
    }

    return true;
};

console.log(unique("abcdefg"));
console.log(unique("abcdefgg"));
console.log("------------");
console.log(uniqueNoDS("abcdefg"));
console.log(uniqueNoDS("abcdefgg"));
console.log("------------");
console.log(uniqueS1("abcdefg"));
console.log(uniqueS1("abcdefgg"));
