const openOrSenior = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(
            openOrSenior([
                [45, 12],
                [55, 21],
                [19, -2],
                [104, 20],
            ])
        ).toStrictEqual(['Open', 'Senior', 'Open', 'Senior'])
        expect(
            openOrSenior([
                [3, 12],
                [55, 1],
                [91, -2],
                [53, 23],
            ])
        ).toStrictEqual(['Open', 'Open', 'Open', 'Open'])
        expect(
            openOrSenior([
                [59, 12],
                [55, -1],
                [12, -2],
                [12, 12],
            ])
        ).toStrictEqual(['Senior', 'Open', 'Open', 'Open'])
    })
})
