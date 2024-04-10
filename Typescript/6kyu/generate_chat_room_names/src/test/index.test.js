const { generateChatRoomNames } = require('../main/index.js')

describe('Generate Chat Room Names', () => {
    it('should return an empty array if no user exist', () => {
        expect(generateChatRoomNames([])).toStrictEqual([])
    })
    it('should return a user first name if only one user exists', () => {
        expect(generateChatRoomNames(['John Doe'])).toStrictEqual(['John'])
    })
})
