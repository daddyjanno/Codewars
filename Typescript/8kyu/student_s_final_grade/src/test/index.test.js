const { finalGrade } = require('../main/index.js')

describe('Final grade', () => {
    it('should return 100', () => {
        expect(finalGrade(100, 12)).toBe(100)
    })
    it('should return 100', () => {
        expect(finalGrade(99, 0)).toBe(100)
    })
    it('should return 100', () => {
        expect(finalGrade(10, 15)).toBe(100)
    })
    it('should return 100', () => {
        expect(finalGrade(50, 12)).toBe(100)
    })
    it('should return 90', () => {
        expect(finalGrade(85, 5)).toBe(90)
    })
    it('should return 90', () => {
        expect(finalGrade(76, 5)).toBe(90)
    })
    it('should return 75', () => {
        expect(finalGrade(51, 2)).toBe(75)
    })
    it('should return 75', () => {
        expect(finalGrade(75, 5)).toBe(75)
    })
    it('should return 0', () => {
        expect(finalGrade(50, 10)).toBe(0)
    })
    it('should return 0', () => {
        expect(finalGrade(75, 1)).toBe(0)
    })
    it('should return 0', () => {
        expect(finalGrade(55, 0)).toBe(0)
    })
    it('should return 0', () => {
        expect(finalGrade(20, 2)).toBe(0)
    })
})
