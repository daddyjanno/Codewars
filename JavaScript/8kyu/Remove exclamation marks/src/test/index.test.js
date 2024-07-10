const removeExclamationMarks = require('../main/index.js')

describe('Test', () => {
    it('should pass sample tests', () => {
        expect(removeExclamationMarks('Hello World!')).toBe('Hello World')
    })
})
