const { generateChatRoomNames } = require('../main/index.js')

describe('Generate Chat Room Names, with one user', () => {
    it('should return an empty array if no user exist', () => {
        expect(generateChatRoomNames([])).toStrictEqual([])
    })
    it('should return a user first name if only one user exists', () => {
        expect(generateChatRoomNames(['John Doe'])).toStrictEqual(['John'])
    })
    it('should return a user first name if only one user exists, in Title case', () => {
        expect(generateChatRoomNames(['JOHN Doe'])).toStrictEqual(['John'])
    })
})
describe('Generate Chat Rooms, with many users', () => {
    it("should return user's firstnames if they are all unique", () => {
        expect(generateChatRoomNames(['John Doe', 'Joe Blogs'])).toStrictEqual([
            'John',
            'Joe',
        ])
    })
})
