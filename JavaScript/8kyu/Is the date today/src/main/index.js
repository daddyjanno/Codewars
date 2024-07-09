const isToday = (date) => {
    const today = new Date().toDateString()
    return today === date.toDateString()
}

module.exports = isToday
