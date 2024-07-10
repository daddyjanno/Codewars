const sizeToNumber = require('../main/index.js')

describe('Clothes size number converter', () => {
    it('should pass basic tests', () => {
        expect(sizeToNumber('s')).toBe(36)
        expect(sizeToNumber('m')).toBe(38)
        expect(sizeToNumber('l')).toBe(40)
        expect(sizeToNumber('xl')).toBe(42)
        expect(sizeToNumber('xs')).toBe(34)
    })
    it('Extra modifier tests', () => {
        expect(sizeToNumber('xxxs')).toBe(30)
        expect(sizeToNumber('xxxl')).toBe(46)
    })
    it('Invalid/wrong sizes/input', () => {
        expect(sizeToNumber('')).toBe(null)
        expect(sizeToNumber('xm')).toBe(null)
        expect(sizeToNumber('xxxm')).toBe(null)
        expect(sizeToNumber('xxxx')).toBe(null)
        expect(sizeToNumber('ssss')).toBe(null)
        expect(sizeToNumber('hello world')).toBe(null)
        expect(sizeToNumber('sm')).toBe(null)
        expect(sizeToNumber('ml')).toBe(null)
        expect(sizeToNumber('lm')).toBe(null)
    })
})
