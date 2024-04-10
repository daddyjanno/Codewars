export function generateChatRoomNames(users: string[]): string[] {
    if (users.length === 0) return []
    if (users.length === 1) {
        let firstName = users[0].split(' ')[0].toLowerCase()
        let lastName = users[0].split(' ')[1].toLowerCase()

        return Array(firstName[0].toUpperCase() + firstName.substring(1))
    }
    if (users.length > 1) {
        let firstNames = []
        let lastNames = []
        users.forEach((user) => {
            firstNames.push(user.split(' ')[0].toLowerCase())
            lastNames.push(user.split(' ')[1].toLowerCase())

            console.log(firstNames, lastNames)
        })
    }
}
