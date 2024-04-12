const { triangle } = require('../main/index.js')

describe('Letter Triangles tests', () => {
    it('should return T', () => {
        expect(triangle('ABCD')).toBe('T')
    })
})
