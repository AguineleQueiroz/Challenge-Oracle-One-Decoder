/* 
*
*   lógica de tratamento das entradas de dados na textarea 
*
*/

// verifica se um caracter esta no array de caracteres
function hashCodeForEncripty(element) {
    const codesForEncripty = {
        'a': '1#$24nI/Gg%*',
        'e': '$Hg%nI)',
        'i': '4nIwG%Ff',
        'o': 'nI1#$24g%',
        'u': '3#$91ç1l',
    }
    if (codesForEncripty.includes(element)) return codesForEncripty[element];
    return;
}
// substitui os caracteres por um hashcode
function replaceCharWithHashCode(element) {
    switch (element) {
        case 'a':
            strArr[element] = hashCodeForEncripty(element);
            break;
        case 'e':
            strArr[element] = hashCodeForEncripty(element);
            break;
        case 'i':
            strArr[element] = hashCodeForEncripty(element);
            break;
        case 'o':
            strArr[element] = hashCodeForEncripty(element);
            break;
        case 'u':
            strArr[element] = hashCodeForEncripty(element);
            break;
        default:
            return strArr;
    }
    return strArr;
}
// criptografa a string passada como argumento 
function encriptyString(strArr) {
    strArr.forEach(element => {
        replaceCharWithHashCode(element);
    });
    return strArr;
}