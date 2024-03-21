let db: string[] = []

export function signIn(password: string): void {
    if (!db.includes(password)) db.push(password)
}
export function logIn(password: string): boolean {
    return db.includes(password) ? true : false
}
