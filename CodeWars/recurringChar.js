let arr = [2, 1, 1, 2, 3, 5, 1, 2, 4];

const first = arr => {
    const mapper = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (mapper.has(arr[i])) return arr[i];
        mapper.set(arr[i]);
    }
};

const alt = input => {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]] !== undefined) return input[i];
        else map[input[i]] = i;
    }
    return undefined;
};

console.log(first(arr));
