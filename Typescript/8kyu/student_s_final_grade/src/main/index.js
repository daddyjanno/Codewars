"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalGrade = void 0;
function finalGrade(grade, projects) {
    return grade > 90 || projects > 10
        ? 100
        : grade > 75 && projects >= 5
            ? 90
            : grade > 50 && projects >= 2
                ? 75
                : 0;
}
exports.finalGrade = finalGrade;
