const { thirdAngleOfATriangle } = require('../main/index.js')

describe('Third angle of a tiangle', () => {
    it('should return 90', () => {
        expect(thirdAngleOfATriangle(30, 60)).toBe(90)
    })
    it('should return 60', () => {
        expect(thirdAngleOfATriangle(60, 60)).toBe(60)
    })
    it('should return 59', () => {
        expect(thirdAngleOfATriangle(43, 78)).toBe(59)
    })
    it('should return 150', () => {
        expect(thirdAngleOfATriangle(10, 20)).toBe(150)
    })
})
