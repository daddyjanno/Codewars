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

    console.log('users: ', users.sort(), users.length)
    console.log('firstNames: ', firstNames, firstNames.length)
    console.log('lastNames :', lastNames, lastNames.length)

    if (users.length === 0) return []
    if (users.length === 1) {
        return firstNames
    }
    let results = [...users]
    for (let i = 0; i < firstNames.length - 1; i++) {
        if (firstNames[i] !== firstNames[i + 1]) {
            results[i] = firstNames[i]
        }
        if (firstNames[i] === firstNames[i + 1]) {
            console.log('same firstNames :', users[i], users[i + 1])
            if (lastNames[i][0] === lastNames[i + 1][0]) {
                console.log('same initials', users[i], users[i + 1])
                results[i] = firstNames[i] + ' ' + lastNames[i]
                results[i + 1] = firstNames[i + 1] + ' ' + lastNames[i + 1]
                console.log('result :', results[i], results[i + 1])
            }
            results[i] = firstNames[i] + ' ' + lastNames[i][0]
            results[i + 1] = firstNames[i + 1] + ' ' + lastNames[i + 1][0]
            console.log('result :', results[i], results[i + 1])
        }
    }
    console.log(results)

    // for (let i = 0; i < usersInCap.length; i++) {
    //     if (usersInCap[i].split(' ')[0] === usersInCap[i + 1].split(' ')[0]) {
    //         if (
    //             usersInCap[i].split(' ')[0] +
    //                 ' ' +
    //                 usersInCap[i].split(' ')[1][0] ===
    //             usersInCap[i + 1].split(' ')[0] +
    //                 ' ' +
    //                 usersInCap[i + 1].split(' ')[1][0]
    //         ) {
    //             results[i] = usersInCap[i]
    //             results[i + 1] = usersInCap[i + 1]
    //         }
    //         results[i] = `${usersInCap[i].split(' ')[0]} ${
    //             usersInCap[i].split(' ')[1][0]
    //         }`

    //         results[i + 1] = `${usersInCap[i + 1].split(' ')[0]} ${
    //             usersInCap[i + 1].split(' ')[1][0]
    //         }`
    //     }
    // }
    console.log('results after :', results, results.length)
    //
    return results
}
