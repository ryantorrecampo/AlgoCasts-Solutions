// function longest(s1, s2) {
//     let unique = new Set();
//     (s1 + s2)
//         .split("")
//         .sort()
//         .forEach(item => {
//             unique.add(item);
//         });
//     return Array.from(unique).join("");
// }
function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join("");
}

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
