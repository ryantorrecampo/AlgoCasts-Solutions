function validatePIN(pin) {
    if (pin.split("").some(item => item.toString().match(/[^0-9 :]/g)))
        return false;
    return pin.length === 4 || pin.length === 6;

    // if (pin.length === 4) {
    //     return pin.length === pin.match(/[0-9]/g).length;
    // }
    // if (pin.length === 6) {
    //     if (pin.match(/[a-z]/g)) {
    //         return pin.length === pin.match(/[a-z]/g).length;
    //     }
    // }
    // return false;
}

console.log(validatePIN("1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("12345"));
console.log(validatePIN("abcdef"));
console.log(validatePIN("090909"));
