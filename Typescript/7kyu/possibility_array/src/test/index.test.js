const { isAllPossibilities } = require('../main/index.js')

describe('Tests if all possibilities', () => {
    it('should return true', () => {
        expect(isAllPossibilities([0, 1, 2, 3])).toBe(true)
    })
})
