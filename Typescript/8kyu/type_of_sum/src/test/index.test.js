const { typeOfSum } = require('../main/index.js')

describe('Type of sum', () => {
    it('should return number', () => {
        expect(typeOfSum(12, 1)).toBe('number')
    })
    it('should return string', () => {
        expect(typeOfSum('d', 1)).toBe('string')
    })
    it('should return string', () => {
        expect(typeOfSum(1, 'a')).toBe('string')
    })
    it('should return string', () => {
        expect(typeOfSum('dd', '')).toBe('string')
    })
    it('should return number', () => {
        expect(typeOfSum(true, 1)).toBe('number')
    })
    it('should return string', () => {
        expect(typeOfSum('s', false)).toBe('string')
    })
    it('should return number', () => {
        expect(typeOfSum(null, 1)).toBe('number')
    })
    it('should return string', () => {
        expect(typeOfSum(null, 's')).toBe('string')
    })
    it('should return number', () => {
        expect(typeOfSum(null, undefined)).toBe('number')
    })
    it('should return string', () => {
        expect(typeOfSum('re', undefined)).toBe('string')
    })
    it('should return number', () => {
        expect(typeOfSum(true, undefined)).toBe('number')
    })
    it('should return number', () => {
        expect(typeOfSum(null, false)).toBe('number')
    })
})
