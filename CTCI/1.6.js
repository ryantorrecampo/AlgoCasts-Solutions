const compress = str => {
    let res = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            res += "" + str[i] + count;
            count = 0;
        }
    }
    return res.length < str.length ? res : str;
};

// const compress = str => {
//     let res = "";
//     let count = 0;
//     str.split("").forEach((char, index) => {
//         count++;
//         if (index + 1 >= str.length || str[index] !== str[index + 1]) {
//             res += "" + str[index] + count;
//             count = 0;
//         }
//     });
//     return res.length < str.length ? res : str;
// }

console.log(compress("aabcccccaaaddddvvxxxxxnnnnnnn"));
console.log(compress("aa"));
