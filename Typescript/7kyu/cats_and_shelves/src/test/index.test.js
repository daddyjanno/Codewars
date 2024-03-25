const { solution } = require('../main/index.js')

describe('Mew test', () => {
    it('should return 2', () => {
        expect(solution(1, 5)).toBe(2)
    })
    it('should return 0', () => {
        expect(solution(3, 3)).toBe(0)
    })
    it('should return 2', () => {
        expect(solution(2, 4)).toBe(2)
    })
})
