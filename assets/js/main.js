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

function copyToClipboard() {
    navigator.clipboard.writeText(valueTextAreaOutput()).then(
        () => alert("Copiado para área de transferência!")
    )
}

/* 
*
*   lógica de respostas
*
*/

const btnEncript = document.querySelector(".btn__encript");
const btnDecript = document.querySelector(".btn__decript");
const btnCopyOutput = document.querySelector(".btn__copy__img");


const addTextInOutput = (text) => {
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(text);
    outputTextDiv.appendChild(textOutput);
}

const valueTextAreaInput = () => document.querySelector(".text__area__input").value;
const valueTextAreaOutput = () => document.querySelector(".text__area__output").value;

function displayTextEncryted() {
    const dataStrInput = valueTextAreaInput();
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