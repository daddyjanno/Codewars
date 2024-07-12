function smaller(nums) {
    return nums.map((num, index) => {
        return nums.slice(index + 1).reduce((acc, num2) => {
            if (num > num2) acc += 1
            return acc
        }, 0)
    })
}

// function smaller(nums) {
//     const result = []
//     for (let i = 0; i < nums.length; i++) {
//         result.push(0)
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] > nums[j]) {
//                 result[i] += 1
//             }
//         }
//     }
//     return result
// }

module.exports = smaller
