const { sakuraFalls } = require('../main/index.js')

describe('Sakura falls', () => {
    it('should return 80', () => {
        expect(sakuraFalls(5)).toBe(80)
    })
    it('should return 40', () => {
        expect(sakuraFalls(10)).toBe(40)
    })
    it('should return 2', () => {
        expect(sakuraFalls(200)).toBe(2)
    })
    it('should return -1', () => {
        expect(sakuraFalls(-1)).toBe(0)
    })
    it('should return 0', () => {
        expect(sakuraFalls(0)).toBe(0)
    })
})
