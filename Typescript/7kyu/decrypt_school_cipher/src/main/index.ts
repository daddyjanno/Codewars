export const decrypt = (str: string): string => {
    return str
        .replaceAll(/'\d+'/g, (x) => String.fromCharCode(+x.slice(1, -1)))
        .split('')
        .reverse()
        .join('')
}
