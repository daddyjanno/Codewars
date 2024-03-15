const { greet } = require('../main')

describe('returning string', () => {
    it('should return "Hello Ryan, how are you doing today?" if passed "Ryan"', () => {
        expect(greet('Ryan')).toBe('Hello Ryan, how are you doing today?')
    })
    it('should return "Hello Shingles, how are you doing today?" if passed "Shingles"', () => {
        expect(greet('Shingles')).toBe(
            'Hello Shingles, how are you doing today?'
        )
    })
})
