// const removeChar = (str) => {
//     return str.substring(1, str.length - 1)
// }
const removeChar = (str) => {
    return str.slice(1, -1)
}

module.exports = removeChar
