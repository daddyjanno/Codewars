const { countSheep } = require('../main/index.js')

describe("If you can't sleep, just count sheep!", () => {
    it('should return "1 sheep...', () => {
        expect(countSheep(1)).toBe('1 sheep...')
    })
    it('should return "1 sheep...2 sheep...', () => {
        expect(countSheep(2)).toBe('1 sheep...2 sheep...')
    })
    it('should return "1 sheep...2 sheep...3 sheep...', () => {
        expect(countSheep(3)).toBe('1 sheep...2 sheep...3 sheep...')
    })
})
