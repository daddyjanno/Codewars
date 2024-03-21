const { signIn, logIn } = require('../main/index.js')

describe('Validate passwords', () => {
    it('test', () => {
        let bob = signIn('Mr me')
        let mary = signIn('Bubblehead123')
    })
    it('should return true', () => {
        expect(logIn('Mr me')).toBe(true)
    })
    it('should return true', () => {
        expect(logIn('Bubblehead123')).toBe(true)
    })
    it('should return false', () => {
        expect(logIn('Not a password')).toBe(false)
    })
})
