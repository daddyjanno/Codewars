const { doubleton } = require('../main/index.js')

describe(' Doubleton numbers', () => {
    it('Testing for 120, should return 121', () => {
        expect(doubleton(120)).toBe(121)
    })
    it('Testing for 1234, should return 1311', () => {
        expect(doubleton(1234)).toBe(1311)
    })
    it('Testing for 1, should return 10', () => {
        expect(doubleton(1)).toBe(10)
    })
    it('Testing for 10, should return 12', () => {
        expect(doubleton(10)).toBe(12)
    })
})
