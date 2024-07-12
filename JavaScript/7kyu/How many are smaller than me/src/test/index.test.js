const smaller = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(smaller([5, 4, 3, 2, 1])).toStrictEqual([4, 3, 2, 1, 0])
        expect(smaller([1, 2, 3])).toStrictEqual([0, 0, 0])
        expect(smaller([1, 2, 0])).toStrictEqual([1, 1, 0])
        expect(smaller([1, 2, 1])).toStrictEqual([0, 1, 0])
        expect(smaller([1, 1, -1, 0, 0])).toStrictEqual([3, 3, 0, 0, 0])
        expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).toStrictEqual([4, 1, 5, 5, 0, 0, 0, 0, 0])

    })
})
