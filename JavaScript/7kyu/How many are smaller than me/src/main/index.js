function smaller(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(0)
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                result[i] += 1
            }
        }
    }
    return result
}

module.exports = smaller
