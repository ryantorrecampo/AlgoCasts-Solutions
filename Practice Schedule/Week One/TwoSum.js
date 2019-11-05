// const twoSumBrute = (nums, target) => {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[j] === target - nums[i] && i !== j) return [i, j]; // Can't use the same element twice.
//         }
//     }
//     return null;
// };

const twoSum = (nums, target) => {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        if (compliment in map) return [map[compliment], i];
        map[nums[i]] = i;
    }
    return null;
};

// space complexity = O(n) because of the hash table (map)
// time complexity = O(n) because we iterate through each element of the array once.

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSumBrute([2, 7, 11, 15], 9));

// step 1
// map = {}
// another = 9-2 = 7
// another is not in map
// map = {'2': 0}

// step 2
// map = {'2' : 0}
// another = 9 - 7 = 2
// another is in map -> return map['2'] = 0 and i = 1;

// returned value = [0 , 1];
