const REQUIRED_ELEMENTS = ['H', 'C', 'N', 'O', 'P', 'Ca']

export function bestPlanet(solarSystem: string[], maxSize: number): string {
    // create object for each planet
    let arrayOfPlanets = solarSystem.map((p) => {
        const [elements, size] = p.split('_')
        return {
            display: p,
            elements: elements.split(/(?=[A-Z])/),
            size: Number(size),
        }
    })

    return (
        arrayOfPlanets
            // filter on planet size
            .filter((p) => p.size <= maxSize)
            //filter planets that had every elements
            .filter(
                (p) =>
                    REQUIRED_ELEMENTS.filter((el) => !p.elements.includes(el))
                        .length === 0
            )
            //sort by size desc
            .sort((a, b) => b.size - a.size)
            // return first element or ""
            .map((p) => p.display)[0] ?? ''
    )
}
