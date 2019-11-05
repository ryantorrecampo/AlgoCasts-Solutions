const groupAnagrams = strs => {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i]
            .split("")
            .sort()
            .join();
        map[sort] ? map[sort].push(strs[i]) : (map[sort] = [strs[i]]);
    }
    return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
