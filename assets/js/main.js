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
    if (codesForEncripty.hasOwnProperty(element)) return codesForEncripty[element];
    return;
}
// substitui os caracteres por um hashcode
function replaceCharWithHashCode(element, strArr) {
    let temp = element;
    switch (element) {
        case 'a':
            temp = hashCodeForEncripty(element);
            break;
        case 'e':
            temp = hashCodeForEncripty(element);
            break;
        case 'i':
            temp = hashCodeForEncripty(element);
            break;
        case 'o':
            temp = hashCodeForEncripty(element);
            break;
        case 'u':
            temp = hashCodeForEncripty(element);
            break;
    }
    return temp;
}

// criptografa a string passada como argumento 
function encriptyString(strArr) {
    const newArr = strArr.map((item) => {
        return replaceCharWithHashCode(item, strArr);
    })
    return newArr;
}

/* 
*
*   lógica de respostas
*
*/

// buttons
const btnEncript = document.querySelector(".btn__encript");
const btnDecript = document.querySelector(".btn__decript");
const copyOutput = document.querySelector(".btn__copy__img");

// pega dados digitados e envia para criptografar
function getDataInput(){
    const dataStrInput = document.querySelector(".text__area__input").value;
    const strArr = Object.assign([], dataStrInput);
    return encriptyString(strArr);
}
// pega dados da saida
function getCopyDataOutput(){
    return navigator.clipboard.readText().then(
        (clipText) => {
            return (document.querySelector(".text__area__output").value += clipText);
        }
    );
}
// imprimir texto criptografado
function displayTextEncripted(){
    const textEncripted = getDataInput().join('');
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(textEncripted);
    outputTextDiv.appendChild(textOutput);
}

btnEncript.addEventListener('click', displayTextEncripted);
copyOutput.addEventListener('click', getCopyDataOutput);
