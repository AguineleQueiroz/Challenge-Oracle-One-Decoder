import { CODES_FOR_ENCRYPT } from './codesobject.js';

export function encryptString(charArr) {
    const newCharArr = charArr.map((char) => {
        return replaceCharWithHashCode(char);
    })
    return newCharArr;
}
// substitui os caracteres por um hashcode
function replaceCharWithHashCode(symbols) {
    for (const char in CODES_FOR_ENCRYPT) {
        if (char === symbols) {
            return encryptToHashCode(char);
        }
    }
    return symbols;
}
// retorna hash correspondente ao char substituível
function encryptToHashCode(symbols) {
    if (CODES_FOR_ENCRYPT.hasOwnProperty(symbols)) {
        const hash = CODES_FOR_ENCRYPT[symbols];
        return hash;
    }
    return;
}

