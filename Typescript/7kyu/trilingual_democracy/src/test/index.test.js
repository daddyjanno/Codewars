const { trilingualDemocracy } = require('../main/index.js')

describe('Trilingual democraty', () => {
    it('should return F', () => {
        expect(trilingualDemocracy('FFF')).toBe('F')
    })
    it('should return K', () => {
        expect(trilingualDemocracy('IIK')).toBe('K')
    })
    it('should return I', () => {
        expect(trilingualDemocracy('DFK')).toBe('I')
    })
})
