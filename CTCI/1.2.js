// Given two strings, write a method to decide if one is a permutation of the other

const isPermutation = (str1, str2) => {
    return (
        str1
            .split("")
            .sort()
            .join("") ===
        str2
            .split("")
            .sort()
            .join("")
    );
};

const isPermutationMap = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const converter = str => {
        const map = {};
        str.split("").forEach(item => {
            map[item] = map[item] + 1 || 1;
        });
        return map;
    };
    let map1 = converter(str1);
    let map2 = converter(str2);
    for (let key in map1) {
        if (map1[key] !== map2[key]) return false;
    }

    return true;
};

console.log(isPermutation("hello", "elohl"));
console.log(isPermutation("hello", "ellll"));
console.log(isPermutationMap("hello", "elohl"));
console.log(isPermutationMap("hello", "ellll"));
console.log(isPermutationMap("god     ", "dog"));
console.log(isPermutationMap("god", "Dog"));
