const getLargerNmbers = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(
            getLargerNmbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])
        ).toStrictEqual([23, 64, 53, 17, 88])
        expect(
            getLargerNmbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80])
        ).toStrictEqual([34, 14, 53, 17, 88])
    })
})
