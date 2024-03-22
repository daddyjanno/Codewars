const { encode, decode } = require('../main/index.js')

describe('Encode function', () => {
    it('should return csordaew', () => {
        expect(encode('codewars')).toBe('csordaew')
    })
    it('should return wehti', () => {
        expect(encode('white')).toBe('wehti')
    })
    it('should return Atsrse"', () => {
        expect(encode('Assert')).toBe('Atsrse')
    })
    it('should return H!edlllroo w"', () => {
        expect(encode('Hello world!')).toBe('H!edlllroo w')
    })
    it('should return Y.oaut ahka vsei hcth oesteanl stnoa rt"', () => {
        expect(encode('You have chosen to translate this kata.')).toBe(
            'Y.oaut ahka vsei hcth oesteanl stnoa rt'
        )
    })
})
describe('Decode function', () => {
    it('should return codewars', () => {
        expect(decode('csordaew')).toBe('codewars')
    })
    it('should return white', () => {
        expect(decode('wehti')).toBe('white')
    })
    it('should return Assert', () => {
        expect(decode('Atsrse')).toBe('Assert')
    })
    it('should return Hello world!', () => {
        expect(decode('H!edlllroo w')).toBe('Hello world!')
    })
    it('should return You have chosen to translate this kata.', () => {
        expect(decode('Y.oaut ahka vsei hcth oesteanl stnoa rt')).toBe(
            'You have chosen to translate this kata.'
        )
    })
})
