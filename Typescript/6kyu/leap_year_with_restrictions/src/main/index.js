"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYear = void 0;
const isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? true : false;
exports.isLeapYear = isLeapYear;
