"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateChatRoomNames = void 0;
function generateChatRoomNames(users) {
    if (users.length === 0)
        return [];
    if (users.length === 1) {
        let firstName = users[0].split(' ')[0].toLowerCase();
        let lastName = users[0].split(' ')[1].toLowerCase();
        return Array(firstName[0].toUpperCase() + firstName.substring(1));
    }
    if (users.length > 1) {
        let firstNames = [];
        let lastNames = [];
        users.forEach((user) => {
            firstNames.push(user.split(' ')[0].toLowerCase());
            lastNames.push(user.split(' ')[1].toLowerCase());
            console.log(firstNames, lastNames);
        });
    }
}
exports.generateChatRoomNames = generateChatRoomNames;
