import { CODES_FOR_ENCRYPT } from "./codesobject.js";

export function decryptString(str) {
    for (const hash in CODES_FOR_ENCRYPT) {
        if (str.includes(CODES_FOR_ENCRYPT[hash])) {
            str = str.replaceAll(CODES_FOR_ENCRYPT[hash], hash);
        }
    }
    return str;
}