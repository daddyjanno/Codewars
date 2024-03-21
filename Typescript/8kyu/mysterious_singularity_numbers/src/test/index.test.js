const { realNumbers } = require('../main/index.js')

describe('Real numbers', () => {
    it('should return 1', () => {
        expect(realNumbers(5)).toBe(1)
    })
    it('should return 2', () => {
        expect(realNumbers(10)).toBe(2)
    })
    it('should return 6', () => {
        expect(realNumbers(20)).toBe(6)
    })
    it('should return 8', () => {
        expect(realNumbers(30)).toBe(8)
    })
    it('should return 10', () => {
        expect(realNumbers(40)).toBe(10)
    })
    it('should return 15', () => {
        expect(realNumbers(55)).toBe(15)
    })
    it('should return 17', () => {
        expect(realNumbers(66)).toBe(17)
    })
    it('should return 20', () => {
        expect(realNumbers(75)).toBe(20)
    })
    it('should return 26', () => {
        expect(realNumbers(100)).toBe(26)
    })
})
