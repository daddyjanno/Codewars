function alphanumeric(string) {
    const regex = /[a-z\d]+$/i
    return regex.test(string)
}
// function alphanumeric(string) {
//     const regex = /[a-zA-Z0-9]/
//     let result = false
//     if (!string) return false
//     for (letter of string) {
//         if (regex.test(letter)) {
//             result = true
//         } else return false
//     }
//     return result
// }

module.exports = alphanumeric
