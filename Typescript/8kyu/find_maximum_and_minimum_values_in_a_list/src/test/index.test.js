const { min, max } = require('../main/index.js')

describe('Find maximum and minimum value in a list', () => {
    it('using min function, it should return -110', () => {
        expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110)
    })
    it('using min function, it should return 0', () => {
        expect(min([42, 54, 65, 87, 0])).toBe(0)
    })
    it('using max function, it should return 566', () => {
        expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566)
    })
    it('using max function, it should return 566', () => {
        expect(max([5])).toBe(5)
    })
})
