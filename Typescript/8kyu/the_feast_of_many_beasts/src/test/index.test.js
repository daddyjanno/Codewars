const { feast } = require('../main/index.js')

describe('The feast of many beast', () => {
    it('should return true for great blue heron and garlic naan', () => {
        expect(feast('great blue heron', 'garlic naan')).toBe(true)
    })
    it('should return true for chickadee and chocolate cake', () => {
        expect(feast('chickadee', 'chocolate cake')).toBe(true)
    })
    it('should return false for brown bear and bear claw', () => {
        expect(feast('brown bear', 'bear claw')).toBe(false)
    })
})
