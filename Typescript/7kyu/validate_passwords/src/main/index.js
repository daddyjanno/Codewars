"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIn = exports.signIn = void 0;
let db = [];
function signIn(password) {
    if (!db.includes(password))
        db.push(password);
}
exports.signIn = signIn;
function logIn(password) {
    return db.includes(password) ? true : false;
}
exports.logIn = logIn;
