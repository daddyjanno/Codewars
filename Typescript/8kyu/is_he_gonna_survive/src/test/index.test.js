const { hero } = require('../main/index.js')

describe('Is he gonna survive ?', () => {
    it('should return true', () => {
        expect(hero(10, 5)).toBe(true)
    })
    it('should return false', () => {
        expect(hero(7, 4)).toBe(false)
    })
    it('should return false', () => {
        expect(hero(4, 5)).toBe(false)
    })
    it('should return true', () => {
        expect(hero(100, 40)).toBe(true)
    })
    it('should return false', () => {
        expect(hero(1500, 751)).toBe(false)
    })
    it('should return false', () => {
        expect(hero(0, 1)).toBe(false)
    })
})
