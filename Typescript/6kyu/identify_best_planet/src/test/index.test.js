const { bestPlanet } = require('../main/index.js')

describe('Best Planet test', () => {
    it('should return OHNCCaP_225', () => {
        expect(
            bestPlanet(
                [
                    'OHNCCaP_100',
                    'OHC_200',
                    'OCa_50',
                    'OHCCaP_400',
                    'OHNCCaP_225',
                ],
                250
            )
        ).toBe('OHNCCaP_225')
    })
    it('should return OHNCCaP_225', () => {
        expect(
            bestPlanet(
                [
                    'OHNCCaP_225',
                    'OHC_200',
                    'OCa_50',
                    'OHCCaP_400',
                    'OUNCCaP_250',
                ],
                250
            )
        ).toBe('OHNCCaP_225')
    })
    it('should return an empty string', () => {
        expect(
            bestPlanet(
                [
                    'OHNCCaP_225',
                    'OHC_200',
                    'OCa_350',
                    'OHCCaP_400',
                    'OHUNCCaP_225',
                ],
                50
            )
        ).toBe('')
    })
    it('should return an empty string', () => {
        expect(
            bestPlanet(
                [
                    'OHNCCaP_225',
                    'OHC_200',
                    'OCa_50',
                    'OHCCaP_400',
                    'OUNCCaP_250',
                ],
                50
            )
        ).toBe('')
    })
})
