// One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

// const oneAway = (str1, str2) => {
//     return (
//         oneEditReplace(str1, str2) ||
//         oneEditInsert(str1, str2) ||
//         oneEditInsert(str2, str1)
//     );
// };

// const oneEditReplace = (str1, str2) => {
//     let foundDifference = false;
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] !== str2[i]) {
//             if (foundDifference) return false; //there can only be one difference
//             foundDifference = true;
//         }
//     }
//     return true;
// };

// const oneEditInsert = (str1, str2) => {
//     let index1 = 0;
//     let index2 = 0;
//     while (index2 < str2.length && index1 < str1.length) {
//         if (str1[index1] !== str2[index2]) {
//             if (index1 !== index2) return false;
//             index2++;
//         } else {
//             index1++;
//             index2++;
//         }
//     }
//     return true;
// };

const oneAway = (str1, str2) => {
    if (Math.abs(str1.length - str2.length) > 1) return false;
    //get shorter and longer string
    let s1 = str1.length < str2.length ? str1 : str2;
    let s2 = str1.length < str2.length ? str2 : str1;
    let index1 = 0;
    let index2 = 0;
    let foundDifference = false;
    while (index2 < s2.length && index1 < s1.length) {
        if (s1[index1] !== s2[index2]) {
            if (foundDifference) return false;
            foundDifference = true;
            if (s1.length === s2.length) index1++; // on replace, move shorter pointer
        } else {
            index1++; // if matching, move shorter pointer
        }
        index2++; // always move pointer for longer string
    }
    return true;
};

console.log(oneAway("pale", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bae"));
