const { tapCodeTranslation } = require('../main/index.js')

describe('Tap Code Translation', () => {
    it('for "a" it should return ". ."', () => {
        expect(tapCodeTranslation('a')).toBe('. .')
    })
    it('for "test" it should return ".... .... . ..... .... ... .... ...."', () => {
        expect(tapCodeTranslation('test')).toBe(
            '.... .... . ..... .... ... .... ....'
        )
    })
    it('for "taps" it should return ".... .... . . ... ..... .... ..."', () => {
        expect(tapCodeTranslation('taps')).toBe(
            '.... .... . . ... ..... .... ...'
        )
    })
    it('for "knocks" it should return ". ... ... ... ... .... . ... . ... .... ..."', () => {
        expect(tapCodeTranslation('knocks')).toBe(
            '. ... ... ... ... .... . ... . ... .... ...'
        )
    })
})
