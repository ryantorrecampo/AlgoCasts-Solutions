const lengthOfLongestSubstring = s => {
    let map = new Map();
    let i = 0,
        j = 0,
        max = 0;
    while (i < s.length && j < s.length) {
        !map.has(s[j]) ? map.set(s[j++]) : map.delete(s[i++]);
        max = Math.max(max, map.size);
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
