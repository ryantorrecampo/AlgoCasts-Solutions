// const containsDuplicate = arr => {
//     const map = {};
//     arr.forEach(item => {
//         map[item] = map[item] + 1 || 1;
//     });
//     return Object.keys(map).some(item => map[item] > 1);
// };

var containsDuplicate = function(nums) {
    let MySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (MySet.has(nums[i])) {
            return true;
        }
        MySet.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
