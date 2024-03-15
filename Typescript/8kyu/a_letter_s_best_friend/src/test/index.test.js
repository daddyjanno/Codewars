const { bestFriend } = require('../main/index.js')
describe('test BestFriend', () => {
    it('should return "true" if passing "he headed to the store, h, e"', () => {
        expect(bestFriend('he headed to the store', 'h', 'e')).toBe(true)
    })
    it('should return "true" if passing "i found an ounce with my hound, o, u"', () => {
        expect(bestFriend('i found an ounce with my hound', 'o', 'u')).toBe(
            true
        )
    })
    it('should return "true" if passing "those were their thorns they said, t, h"', () => {
        expect(bestFriend('those were their thorns they said', 't', 'h')).toBe(
            true
        )
    })
    it('should return "false" if passing "we found your dynamite, d, y"', () => {
        expect(bestFriend('we found your dynamite', 'd', 'y')).toBe(false)
    })
    it('should return "false" if passing "look they took the cookies, o, o"', () => {
        expect(bestFriend('look they took the cookies', 'o', 'o')).toBe(false)
    })
    it('should return "false" if passing "a test, t, e"', () => {
        expect(bestFriend('a test', 't', 'e')).toBe(false)
    })
    it('should return "false" if passing "abcdee, e, e"', () => {
        expect(bestFriend('abcdee', 'e', 'e')).toBe(false)
    })
    it('should return "false" if passing "abcde, e, e"', () => {
        expect(bestFriend('abcde', 'e', 'e')).toBe(false)
    })
})
