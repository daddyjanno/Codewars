export function generateChatRoomNames(users: string[]): string[] {
    if (users.length === 0) return []
    if (users.length === 1) {
        let firstName =
            users[0].split(' ')[0][0].toUpperCase() +
            users[0].split(' ')[0].substring(1).toLowerCase()

        return Array(firstName)
    }

    users = users.sort()

    let results = users.map((user) => user.split(' ')[0])

    for (let i = 0; i < results.length; i++) {
        if (results[i] === results[i + 1]) {
            console.log('same firstname')
            results[i] = `${users[i].split(' ')[0]} ${
                users[i].split(' ')[1][0]
            }`
            results[i + 1] = `${users[i + 1].split(' ')[0]} ${
                users[i + 1].split(' ')[1][0]
            }`
            if (results[i] === results[i + 1]) {
                results[i] = users[i]
                results[i + 1] = users[i + 1]
            }
        }
    }
    console.log('results :', results)

    return results

    // users.forEach((user) => {
    //     firstNames.push(
    //         user.split(' ')[0][0].toUpperCase() +
    //             user.split(' ')[0].substring(1).toLowerCase()
    //     )
    //     lastNames.push(
    //         user.split(' ')[1][0].toUpperCase() +
    //             user.split(' ')[1].substring(1).toLowerCase()
    //     )
    // })

    // let result = []
    // for (let i = 0; i < firstNames.length; i++) {
    //     console.log(firstNames[i], firstNames[i + 1])

    //     firstNames[i] !== firstNames[i + 1]
    //         ? result.push(firstNames[i])
    //         : `${firstNames[i]} ${lastNames[i][0]}` !==
    //           `${firstNames[i + 1]} ${lastNames[i + 1][0]}`
    //         ? result.push(`${firstNames[i]} ${lastNames[i][0]}`)
    //         : result.push(`${firstNames[i]} ${lastNames[i]}`)
    // }
    // console.log(result)

    // return result.sort()
}
