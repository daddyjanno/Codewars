function circleArea(radius) {
    if (radius <= 0) {
        return 'Error'
    }
    const area = Math.PI * radius ** 2
    return Math.round(area * 1000) / 1000
}

module.exports = circleArea
