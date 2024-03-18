const { points } = require('../main/index.js')

describe('Calculate number of points for our team', () => {
    it('should return 30', () => {
        expect(
            points([
                '1:0',
                '2:0',
                '3:0',
                '4:0',
                '2:1',
                '3:1',
                '4:1',
                '3:2',
                '4:2',
                '4:3',
            ])
        ).toBe(30)
    })
    it('should return 10', () => {
        expect(
            points([
                '1:1',
                '2:2',
                '3:3',
                '4:4',
                '2:2',
                '3:3',
                '4:4',
                '3:3',
                '4:4',
                '4:4',
            ])
        ).toBe(10)
    })
    it('should return 0', () => {
        expect(
            points([
                '0:1',
                '0:2',
                '0:3',
                '0:4',
                '1:2',
                '1:3',
                '1:4',
                '2:3',
                '2:4',
                '3:4',
            ])
        ).toBe(0)
    })
    it('should return 15', () => {
        expect(
            points([
                '1:0',
                '2:0',
                '3:0',
                '4:0',
                '2:1',
                '1:3',
                '1:4',
                '2:3',
                '2:4',
                '3:4',
            ])
        ).toBe(15)
    })
    it('should return 12', () => {
        expect(
            points([
                '1:0',
                '2:0',
                '3:0',
                '4:4',
                '2:2',
                '3:3',
                '1:4',
                '2:3',
                '2:4',
                '3:4',
            ])
        ).toBe(12)
    })
})
