"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = void 0;
const decrypt = (str) => {
    return str
        .replaceAll(/'\d+'/g, (x) => String.fromCharCode(+x.slice(1, -1)))
        .split('')
        .reverse()
        .join('');
};
exports.decrypt = decrypt;
