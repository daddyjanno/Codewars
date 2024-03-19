const { gravityFlip } = require('../main/index.js')

describe('Gravity Flip', () => {
    it('should return [1,2,2,3]', () => {
        expect(gravityFlip('R', [3, 2, 1, 2])).toStrictEqual([1, 2, 2, 3])
    })
    it('should return [5,5,4,3,1]', () => {
        expect(gravityFlip('L', [1, 4, 5, 3, 5])).toStrictEqual([5, 5, 4, 3, 1])
    })
    it('should return [ 2, 4, 7, 13, 93 ]', () => {
        expect(gravityFlip('R', [13, 2, 4, 7, 93])).toStrictEqual([
            2, 4, 7, 13, 93,
        ])
    })
})
