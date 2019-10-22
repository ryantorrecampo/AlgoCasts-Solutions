// const reverse = str => {
//     let res = "";
//     for (let char of str) {
//         res = char + res;
//     }
//     return res;
// };

const reverse = str => {
    if (str === "") return "";
    return reverse(str.substr(1)) + str.charAt(0);
};

console.log(reverse("hello"));

// callStack = [];

// reverse("hello") => callStack.push('h');
// reverse("ello") => callStack.push('e');
// reverse("llo") => callStack.push('l');
// reverse('lo') => call.push('l');
// reverse('o') => call.push('o');
// reverse('') => ""
// callStack = [h,e,l,l,o]
// //pop off each letter and add it
// => o + l + l + e + h
