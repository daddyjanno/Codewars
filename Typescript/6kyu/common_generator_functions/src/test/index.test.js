const { range } = require('../main/index.js')

describe('range function', () => {
    it('Counts from 2 to 10 in steps of 2', () => {
        expect(range(2, 10, 2).next().value).toBe(2)
        expect(range(2, 10, 2).next().value).toBe(4)
    })
    // it('Counts from 60 to 101 in steps of 10', () => {
    //     expect(range(60, 101, 10)).toStrictEqual([60, 70, 80, 90, 100])
    // })
    // it('Counts from 5 to 9 in steps of 1', () => {
    //     expect(range(5, 9, 1)).toStrictEqual([5, 6, 7, 8])
    // })
    // it('Counts from 5 to 9', () => {
    //     expect(range(5, 9)).toStrictEqual([5, 6, 7, 8])
    // })
    // it('Counts up from -10', () => {
    //     expect(range(-10)).toStrictEqual(
    //         [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1],
    //         12
    //     )
    // })
    // it('Counts up from 0 by default', () => {
    //     expect(range()).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)
    // })
})
