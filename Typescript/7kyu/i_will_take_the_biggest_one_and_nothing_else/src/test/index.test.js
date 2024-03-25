const { maxIntChain } = require('../main/index.js')

describe('Fixed tests', () => {
    it('should return 8', () => {
        expect(maxIntChain(6)).toBe(8)
    })
    it('should return 24', () => {
        expect(maxIntChain(10)).toBe(24)
    })
    it('should return 168', () => {
        expect(maxIntChain(26)).toBe(168)
    })
    it('should return 255', () => {
        expect(maxIntChain(32)).toBe(255)
    })
    it('should return 323', () => {
        expect(maxIntChain(36)).toBe(323)
    })
    it('should return 380', () => {
        expect(maxIntChain(39)).toBe(380)
    })
})
describe('Prime integers', () => {
    it('should return 6', () => {
        expect(maxIntChain(5)).toBe(6)
    })
    it('should return 12', () => {
        expect(maxIntChain(7)).toBe(12)
    })
    it('should return 30', () => {
        expect(maxIntChain(11)).toBe(30)
    })
    it('should return 42', () => {
        expect(maxIntChain(13)).toBe(42)
    })
    it('should return 72', () => {
        expect(maxIntChain(17)).toBe(72)
    })
})
describe('Starting integers less than 5', () => {
    it('should return -1', () => {
        expect(maxIntChain(1)).toBe(-1)
    })
    it('should return -1', () => {
        expect(maxIntChain(2)).toBe(-1)
    })
    it('should return -1', () => {
        expect(maxIntChain(3)).toBe(-1)
    })
    it('should return -1', () => {
        expect(maxIntChain(4)).toBe(-1)
    })
})
