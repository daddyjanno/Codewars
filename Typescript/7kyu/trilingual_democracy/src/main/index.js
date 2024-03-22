"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trilingualDemocracy = void 0;
// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set
function trilingualDemocracy(group) {
    const languages = ['D', 'F', 'I', 'K'];
    const arr = group.split('').sort();
    if (arr[0] === arr[1] && arr[0] === arr[2]) {
        return arr[0];
    }
    else if (arr[0] === arr[1]) {
        return arr[2];
    }
    else if (arr[1] === arr[2]) {
        return arr[0];
    }
    else
        return languages.filter((el) => !arr.includes(el)).join('');
}
exports.trilingualDemocracy = trilingualDemocracy;
