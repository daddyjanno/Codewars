const isToday = require('../main/index.js')

describe('Test', () => {
    const today = new Date()
    it('should return true for today', () => {
        expect(isToday(today)).toBe(true)
    })
    it('should return false for tomorrow', () => {
        const tomorrow = new Date()
        tomorrow.setDate(today.getDate() + 1)
        expect(isToday(tomorrow)).toBe(false)
    })
})
