import { copyToClipboard } from './copy.js';
import { displayTextEncryted, displayTextDecrypted } from './displaytext.js';

const btnEncript = document.querySelector(".btn__encript");
const btnDecript = document.querySelector(".btn__decript");
const btnCopyOutput = document.querySelector(".btn__copy__img");

btnEncript.addEventListener('click', displayTextEncryted);
btnDecript.addEventListener('click', displayTextDecrypted);
btnCopyOutput.addEventListener('click', copyToClipboard);