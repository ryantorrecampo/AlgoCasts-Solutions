const productExceptSelf = nums => {
    let length = nums.length;
    let L = [];
    let R = [];
    let ans = [];
    L[0] = 1;
    for (let i = 1; i < length; i++) {
        L[i] = L[i - 1] * nums[i - 1];
    }
    R[length - 1] = 1;
    for (let i = length - 2; i >= 0; i--) {
        R[i] = R[i + 1] * nums[i + 1];
    }
    for (let i = 0; i < length; i++) {
        ans[i] = L[i] * R[i];
    }
    return ans;
};

console.log(productExceptSelf([4, 5, 1, 8, 2]));
