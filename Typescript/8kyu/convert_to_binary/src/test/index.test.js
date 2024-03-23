const { toBinary } = require('../main/index.js')

describe('Convert to binary', () => {
    it('should return 1', () => {
        expect(toBinary(1)).toBe(1)
    })
    it('should return 10', () => {
        expect(toBinary(2)).toBe(10)
    })
    it('should return 11', () => {
        expect(toBinary(3)).toBe(11)
    })
    it('should return 101', () => {
        expect(toBinary(5)).toBe(101)
    })
})
