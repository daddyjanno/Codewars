export function finalGrade(grade: number, projects: number): number {
    return grade > 90 || projects > 10
        ? 100
        : grade > 75 && projects >= 5
        ? 90
        : grade > 50 && projects >= 2
        ? 75
        : 0
}
