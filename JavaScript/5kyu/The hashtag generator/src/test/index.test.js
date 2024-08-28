const generateHashtag = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(generateHashtag('')).toBe(false)
        expect(generateHashtag('Do We have A Hashtag')).toBe(
            '#DoWeHaveAHashtag'
        )
        expect(generateHashtag('Codewars')).toBe('#Codewars')
        expect(generateHashtag('Codewars Is Nice')).toBe('#CodewarsIsNice')
        expect(generateHashtag('Codewars is nice')).toBe('#CodewarsIsNice')
        expect(
            generateHashtag(
                'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
            )
        ).toBe(false)
    })
})
