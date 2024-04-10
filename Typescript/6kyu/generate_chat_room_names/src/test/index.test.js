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
        expect(generateChatRoomNames(['Joe Blogs', 'John Doe'])).toStrictEqual([
            'Joe',
            'John',
        ])
    })
    it("should return user's firstnames if they are all unique, in alphabetical order", () => {
        expect(
            generateChatRoomNames(['John Doe', 'Joe Blogs', 'Jane Doe'])
        ).toStrictEqual(['Jane', 'Joe', 'John'])
    })
    it("should return user's initials if their is a forename collision", () => {
        expect(
            generateChatRoomNames([
                'Joe Bloggs',
                'John Smith',
                'Jane Doe',
                'Jane Bloggs',
            ])
        ).toStrictEqual(['Jane B', 'Jane D', 'Joe', 'John'])
    })
})
