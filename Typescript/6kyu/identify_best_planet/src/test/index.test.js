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
})
