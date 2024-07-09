const arr2Bin = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(arr2Bin([1, 2])).toBe('11')
        expect(arr2Bin([1, 2, 3, 4, 5])).toBe('1111')
        expect(arr2Bin([1, 10, 100, 1000])).toBe('10001010111')
        expect(arr2Bin([null])).toBe('0')
        expect(arr2Bin([true, true, false, 15])).toBe('1111')
    })
})
