// const isAnagram = (str1, str2) => {
//     return (
//         str1
//             .split("")
//             .sort() //O(n^2) at worst, O(n) if nearly sorted
//             .join("") ===
//         str2
//             .split("")
//             .sort()
//             .join("")
//     );
// };

// TC: O(3n) -> O(n)
// SC: O(2n) -> O(n)
const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const converter = str => {
        const map = {};
        str.split("").forEach(item => {
            map[item] = map[item] + 1 || 1;
        });
        return map;
    };

    const mapA = converter(str1); // O(1) the table's size stays constant no matter how large n is
    const mapB = converter(str2); // O(1)
    for (let key in mapA) {
        // O(n)
        if (mapA[key] !== mapB[key]) return false; // each look up is O(1)
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagarams"));
console.log(isAnagram("Ãanagram", "nagaÃram"));

// const isAnagram = (str1, str2) => {
//     const converter = str => {
//         const map = {};
//         str.split("").forEach(item => {
//             map[item] = map[item] + 1 || 1;
//         });
//         return map;
//     };
//     const mapA = converter(str1);
//     const mapB = converter(str2);
//     if (str1.length !== str2.length) return false;
//     for (let key in mapA) {
//         if (mapA[key] !== mapB[key]) return false;
//     }
//     return true;
// };
