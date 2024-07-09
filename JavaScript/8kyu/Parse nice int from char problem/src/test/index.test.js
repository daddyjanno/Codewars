const getAge = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(getAge('4 years old')).toBe(4)
        expect(getAge('9 years old')).toBe(9)
        expect(getAge('1 year old')).toBe(1)
    })
})
