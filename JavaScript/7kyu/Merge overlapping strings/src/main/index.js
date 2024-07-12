function mergeStrings(first, second) {
    // Your solution
    if (first === second) {
        return first
    }

    for (let i = first.length; i >= 0; i--) {
        if (first.endsWith(second.slice(0, i))) {
            return first + second.slice(i)
        }
    }
    return first + second
}

module.exports = mergeStrings
