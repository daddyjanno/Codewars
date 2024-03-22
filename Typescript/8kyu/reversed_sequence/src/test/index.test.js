const { reverseSequence } = require('../main/index.js')

describe('Reverse sequence', () => {
    it('should return [5, 4, 3, 2, 1]', () => {
        expect(reverseSequence(5)).toStrictEqual([5, 4, 3, 2, 1])
    })
})
