const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca']

export function bestPlanet(solarSystem: string[], maxSize: number): string {
    let result: string[] = []
    solarSystem.forEach((planet) => {
        if (REQUIRED_ELEMENTS.every((el) => planet.includes(el)))
            result.push(planet)
    })

    result.filter((el) => Number(el.split('_')[1]) >= maxSize)
    return String(result.sort().pop())
}
