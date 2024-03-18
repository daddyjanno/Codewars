describe('Check if two given characters are the same case', () => {
    it('should return -1 if none of the characters are letters', () => {
        expect(sameCase('/t', 'Z')).toBe(-1)
    })
    it('should return -1 if none of the characters are letters', () => {
        expect(sameCase('H', ':')).toBe(-1)
    })
    it('should return 1 if both of the characters are letters and the same case', () => {
        expect(sameCase('a', 'g')).toBe(1)
    })
    it('should return 1 if both of the characters are letters and the same case', () => {
        expect(sameCase('C', 'B')).toBe(1)
    })
    it('should return 1 if both of the characters are letters and the same case', () => {
        expect(sameCase('b', 'a')).toBe(1)
    })
    it('should return 1 if both of the characters are letters and the same case', () => {
        expect(sameCase('d', 'd')).toBe(1)
    })
    it('should return 0 if both of the characters are letters but not the same case', () => {
        expect(sameCase('A', 'g')).toBe(0)
    })
    it('should return 0 if both of the characters are letters but not the same case', () => {
        expect(sameCase('A', 's')).toBe(0)
    })
    it('should return 0 if both of the characters are letters but not the same case', () => {
        expect(sameCase('c', 'B')).toBe(0)
    })
    it('should return 0 if both of the characters are letters but not the same case', () => {
        expect(sameCase('b', 'Z')).toBe(0)
    })
})
