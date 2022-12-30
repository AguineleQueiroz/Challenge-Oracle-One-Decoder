/* 
*
*   lógica de tratamento das entradas de dados na textarea 
*
*/

/*
const CODES_FOR_ENCRYPT = {
    'a': '1#$24nI/Gg%*',
    'e': '$Hg%nI)',
    'i': '4nIwG%Ff',
    'o': 'nI1#$24g%',
    'u': '3#$91ç1l',
    ' ': 'ffx'
}
*/

const CODES_FOR_ENCRYPT = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
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
    for (const char in CODES_FOR_ENCRYPT) {
        if (char === symbols) {
            return encryptToHashCode(char);
        }
    }
    return symbols;
}

function encriptyString(charArr) {
    const newCharArr = charArr.map((char) => {
        return replaceCharWithHashCode(char);
    })
    return newCharArr;
}

const resetInputs = () => {
    setTimeout(() => {
        document.location.reload();
    }, .2);
}

function copyToClipboard() {
    navigator.clipboard.writeText(valueTextAreaOutput()).then();
    resetInputs();
}

/* 
*
*   lógica de funcionamento
*
*/

const btnEncript = document.querySelector(".btn__encript");
const btnDecript = document.querySelector(".btn__decript");
const btnCopyOutput = document.querySelector(".btn__copy__img");


const addTextInOutput = (text) => {
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(text);
    const textAreaOutput = document.querySelector(".text__area__output");
    textAreaOutput.style.cssText = 'background-image: url();';
    outputTextDiv.appendChild(textOutput);
}

const valueTextAreaInput = () => document.querySelector(".text__area__input").value;
const valueTextAreaOutput = () => document.querySelector(".text__area__output").value;

function displayTextEncryted() {
    const dataStrInput = valueTextAreaInput().toLowerCase();
    const charArr = Object.assign([], dataStrInput);
    const textEncripted = encriptyString(charArr).join('');
    addTextInOutput(textEncripted);
}

function displayTextDecrypted() {
    const str = valueTextAreaInput();
    const textDecrypted = decryptString(str);
    addTextInOutput(textDecrypted);
}

btnEncript.addEventListener('click', displayTextEncryted);
btnDecript.addEventListener('click', displayTextDecrypted);
btnCopyOutput.addEventListener('click', copyToClipboard);