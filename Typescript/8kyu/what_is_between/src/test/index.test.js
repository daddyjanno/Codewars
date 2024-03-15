const { between } = require('../main/index')
describe('What is between', () => {
    it('should return [1, 2, 3, 4] if passed 1 and 4', () => {
        expect(between(1, 4)).toStrictEqual([1, 2, 3, 4])
    })
    it('should return [-2, -1, 0, 1, 2] if passed -2 and 2', () => {
        expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2])
    })
    it('should return [0, 1, 2, 3, 4, 5] if passed 0 and 5', () => {
        expect(between(0, 5)).toStrictEqual([0, 1, 2, 3, 4, 5])
    })
})
