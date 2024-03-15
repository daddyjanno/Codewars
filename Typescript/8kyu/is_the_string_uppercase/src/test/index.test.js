const { isUpperCase } = require('../main')

describe('is UpperCase ? ', () => {
    it('should return "false" if passed "c"', () => {
        expect(isUpperCase('c')).toBe(false)
    })
    it('should return "true" if passed "C"', () => {
        expect(isUpperCase('C')).toBe(true)
    })
    it('should return "false" if passed "hello I AM DONALD"', () => {
        expect(isUpperCase('hello I AM DONALD')).toBe(false)
    })
    it('should return "true" if passed "HELLO I AM DONALD"', () => {
        expect(isUpperCase('HELLO I AM DONALD')).toBe(true)
    })
    it('should return "false" if passed "ACSKLDFJSgSKLDFJSKLDFJ"', () => {
        expect(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ')).toBe(false)
    })
    it('should return "true" if passed "ACSKLDFJSGSKLDFJSKLDFJ"', () => {
        expect(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ')).toBe(true)
    })
})
