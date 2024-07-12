const circleArea = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(circleArea(68)).toBe(14526.724)
        expect(circleArea(43.2673)).toBe(5881.248)
        expect(circleArea(0)).toBe('Error')
        expect(circleArea(-1)).toBe('Error')
    })
})
