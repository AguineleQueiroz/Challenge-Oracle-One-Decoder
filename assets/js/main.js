/* 
*
*   lógica de tratamento das entradas de dados na textarea 
*
*/

const CODES_FOR_ENCRYPT = {
    'a': '1#$24nI/Gg%*',
    'e': '$Hg%nI)',
    'i': '4nIwG%Ff',
    'o': 'nI1#$24g%',
    'u': '3#$91ç1l',
    ' ': 'ffx'
}

function encryptToHashCode(symbols) {

    if (CODES_FOR_ENCRYPT.hasOwnProperty(symbols)) {
        const hash = CODES_FOR_ENCRYPT[symbols];
        return hash;
    }
    return;
}

function decryptString(str) {
    for (const hash in CODES_FOR_ENCRYPT) {
        if (str.includes(CODES_FOR_ENCRYPT[hash])) {
            str = str.replaceAll(CODES_FOR_ENCRYPT[hash], hash);
        }
    }
    return str;
}
// substitui os caracteres por um hashcode
function replaceCharWithHashCode(symbols) {
    let code = symbols;
    switch (symbols) {
        case 'a':
            code = encryptToHashCode(symbols);
            break;
        case 'e':
            code = encryptToHashCode(symbols);
            break;
        case 'i':
            code = encryptToHashCode(symbols);
            break;
        case 'o':
            code = encryptToHashCode(symbols);
            break;
        case 'u':
            code = encryptToHashCode(symbols);
            break;
        case ' ':
            code = encryptToHashCode(symbols);
            break;
    }
    return code;
}

function encriptyString(charArr) {
    const newCharArr = charArr.map((char) => {
        return replaceCharWithHashCode(char);
    })
    return newCharArr;
}

/* 
*
*   lógica de respostas
*
*/

const btnEncript = document.querySelector(".btn__encript");
const btnDecript = document.querySelector(".btn__decript");
// const copyOutput = document.querySelector(".btn__copy__img");

// function getDataInputForEncrypt() {
//     const dataStrInput = document.querySelector(".text__area__input").value;
//     const charArr = Object.assign([], dataStrInput);
//     return charArr;
// }

function writeTextEncryptedOutput() {
    const dataStrInput = document.querySelector(".text__area__input").value;
    const charArr = Object.assign([], dataStrInput);
    const textEncripted = encriptyString(charArr).join('');
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(textEncripted);
    outputTextDiv.appendChild(textOutput);
}

function writeTextDecryptedOutput() {
    console.log('entrou')
    const str = document.querySelector(".text__area__input").value;
    console.log(str)
    const textDecrypted = decryptString(str);
    console.log(textDecrypted)
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(textDecrypted);
    console.log(textOutput)
    outputTextDiv.appendChild(textOutput);
}

btnEncript.addEventListener('click', writeTextEncryptedOutput);
btnDecript.addEventListener('click', writeTextDecryptedOutput);