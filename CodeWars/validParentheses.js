const isValid = function(s) {
    const map = {
        "}": "{",
        "]": "[",
        ")": "("
    };

    let stack = [];
    for (let char of s) {
        if (map[char] === undefined) stack.push(char);
        else if (stack[stack.length - 1] === map[char]) stack.pop();
        else return false;
    }
    return stack.length === 0;
};

console.log(isValid("()([{}])"));
