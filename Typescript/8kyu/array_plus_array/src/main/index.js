"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayPlusArray = void 0;
function arrayPlusArray(arr1, arr2) {
    return (arr1.reduce((curr, acc) => curr + acc) +
        arr2.reduce((curr, acc) => curr + acc));
}
exports.arrayPlusArray = arrayPlusArray;
