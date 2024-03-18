const { twiceAsOld } = require('../main/index.js')

describe('Twice as old', () => {
    it("should return 22 if testing for dad's age: 36 and son's age: 7", () => {
        expect(twiceAsOld(36, 7)).toBe(22)
    })
    it("should return 5 if testing for dad's age: 55 and son's age: 30", () => {
        expect(twiceAsOld(55, 30)).toBe(5)
    })
    it("should return 0 if testing for dad's age: 42 and son's age: 21", () => {
        expect(twiceAsOld(42, 21)).toBe(0)
    })
    it("should return 20 if testing for dad's age: 22 and son's age: 1", () => {
        expect(twiceAsOld(22, 1)).toBe(20)
    })
    it("should return 29 if testing for dad's age: 29 and son's age: 0", () => {
        expect(twiceAsOld(29, 0)).toBe(29)
    })
})
