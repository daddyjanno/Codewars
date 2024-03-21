const { hasSurvived } = require('../main/index.js')

decribe('Has survived', () => {
    it('should return true', () => {
        expect(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])).toBe(true)
    })
})
