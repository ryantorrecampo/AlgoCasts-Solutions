let a = [1, 2, 3, 4];
let b = [1, 2, 9, 9];
let c = [9, 9, 9];

const add_one = arr => {
    let carry = 1;
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let total = arr[i] + carry;
        if (total === 10) carry = 1;
        else carry = 0;
        res[i] = total % 10;
    }
    if (carry === 1) res.unshift(1);
    return res;
};

console.log(add_one(a));
console.log(add_one(b));
console.log(add_one(c));
