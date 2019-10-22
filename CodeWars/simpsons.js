// function list(names) {
//     if (names.length === 0) return "";
//     if (names.length === 1) return names.name;
//     let namesArr = [];
//     for (let obj of names) {
//         namesArr.push(obj.name);
//     }
//     let res = "";
//     for (let i = 0; i < namesArr.length - 2; i++) {
//         res += namesArr[i] + ", ";
//     }
//     res +=
//         namesArr[namesArr.length - 2] + " & " + namesArr[namesArr.length - 1];
//     return res;
// }

function list(names) {
    return names.reduce((prev, curr, index) => {
        if (index === 0) return curr.name;
        else if (index === names.length - 1) return prev + " & " + curr.name;
        else return prev + ", " + curr.name;
    }, "");
}

console.log(
    list([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" }
    ])
);
