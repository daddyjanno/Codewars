const { checkLogs } = require('../main/index.js')

describe('Log without dates', () => {
    it('should return 1', () => {
        expect(
            checkLogs([
                '00:00:00',
                '00:01:11',
                '02:15:59',
                '23:59:58',
                '23:59:59',
            ])
        ).toBe(1)
    })
    it('should return 2', () => {
        expect(checkLogs(['12:00:00', '23:59:59', '00:00:00'])).toBe(2)
    })
    it('should return 3', () => {
        expect(checkLogs(['12:00:00', '12:00:00', '00:00:00'])).toBe(3)
    })
})
