const isValid = function(s) {
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    const stack = [];
    for (let char of s) {
        if (map[char] === undefined) stack.push(char);
        else if (stack[stack.length - 1] === map[char]) stack.pop();
        // a match is found
        else return false; // closer with no match found
    }

    return stack.length === 0 || false;
};
