const { draw } = require('../main/index.js')

describe('Draw a deck of cards', () => {
    it('should return ["KC", "QC", "KD", "QD", "KH", "QH", "KS", "QS"]', () => {
        expect(draw(['KC', 'KH', 'QC', 'KS', 'KD', 'QH', 'QD', 'QS'])).toBe([
            'KC',
            'QC',
            'KD',
            'QD',
            'KH',
            'QH',
            'KS',
            'QS',
        ])
    })
})
