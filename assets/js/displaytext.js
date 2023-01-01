import { encryptString } from './encrypt.js';
import { decryptString } from './decrypt.js';

export { valueTextAreaInput, valueTextAreaOutput, displayTextDecrypted, displayTextEncryted };

const valueTextAreaInput = () => document.querySelector(".text__area__input").value;
const valueTextAreaOutput = () => document.querySelector(".text__area__output").value;

function displayTextEncryted() {
    const dataStrInput = valueTextAreaInput().toLowerCase();
    const charArr = Object.assign([], dataStrInput);
    const textEncripted = encryptString(charArr).join('');
    addTextInOutput(textEncripted);
}

function displayTextDecrypted() {
    const str = valueTextAreaInput();
    const textDecrypted = decryptString(str);
    addTextInOutput(textDecrypted);
}

const addTextInOutput = (text) => {
    const outputTextDiv = document.querySelector(".text__area__output");
    const textOutput = document.createTextNode(text);
    const textAreaOutput = document.querySelector(".text__area__output");
    textAreaOutput.style.cssText = 'background-image: url();';
    outputTextDiv.appendChild(textOutput);
}

