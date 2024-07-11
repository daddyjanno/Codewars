const coffee = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(coffee('Coffee! Buy me a COFFEE')).toBe(
            'COFFEE! Buy me a COFFEE'
        )
        expect(coffee('No cream in my coffee, thanks.')).toBe(
            'No cream in my COFFEE, thanks.'
        )
        expect(
            coffee(
                "I'm having trouble staying focussed.  Let's get some coffee."
            )
        ).toBe("I'm having trouble staying focussed.  Let's get some COFFEE.")
    })
})
