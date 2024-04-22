const { checkExam } = require('../main/index.js')

describe('CheckExam tests', () => {
    it('should return 6', () => {
        expect(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])).toBe(6)
    })
})
