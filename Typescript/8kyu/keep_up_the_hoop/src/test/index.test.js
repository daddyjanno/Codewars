const { hoopCount } = require('../main/index.js')
describe('Keep up the hoop', () => {
    it('should return "Great, now move on to tricks" if n is higher or equal to 10', () => {
        expect(hoopCount(10)).toBe('Great, now move on to tricks')
    })
    it('should return "Great, now move on to tricks" if n is higher or equal to 10', () => {
        expect(hoopCount(22)).toBe('Great, now move on to tricks')
    })
    it('should return "Keep at it until you get it"" if n is lower than 10', () => {
        expect(hoopCount(6)).toBe('Keep at it until you get it')
    })
    it('should return "Keep at it until you get it"" if n is lower than 10', () => {
        expect(hoopCount(9)).toBe('Keep at it until you get it')
    })
})
