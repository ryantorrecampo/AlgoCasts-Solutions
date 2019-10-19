const groupAnagrams = strs => {
    const map = {};
    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i]
            .split("")
            .sort()
            .join();
        if (map[sort]) map[sort].push(strs[i]);
        else map[sort] = [strs[i]];
    }
    return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
