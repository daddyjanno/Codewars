export function generateChatRoomNames(users: string[]): string[] {
    users = users
        .map(
            (user) =>
                user.split(' ')[0][0].toUpperCase() +
                user.split(' ')[0].substring(1).toLowerCase() +
                ' ' +
                user.split(' ')[1][0].toUpperCase() +
                user.split(' ')[1].substring(1).toLowerCase()
        )
        .sort()
    let firstNames = users.map((el) => el.split(' ')[0])
    let lastNames = users.map((el) => el.split(' ')[1])

    if (users.length === 0) return []
    if (users.length === 1) {
        return firstNames
    }
    let results = [...firstNames]
    for (let i = 0; i < results.length; i++) {
        if (firstNames[i] === firstNames[i + 1]) {
            results[i] = firstNames[i] + ' ' + lastNames[i][0]
            results[i + 1] = firstNames[i + 1] + ' ' + lastNames[i + 1][0]
        }
    }
    for (let i = 0; i < firstNames.length; i++) {
        if (results[i] === results[i + 1]) {
            results[i] = users[i]
            results[i + 1] = users[i + 1]
        }
    }

    return results
}
