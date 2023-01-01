import { valueTextAreaOutput } from './displaytext.js';

export { resetInputs, copyToClipboard };

const resetInputs = () => {
    setTimeout(() => {
        document.location.reload();
    }, .2);
}

function copyToClipboard() {
    navigator.clipboard.writeText(valueTextAreaOutput()).then(
        () => alert("Copiado para a área de transferência!")
    );
    resetInputs();
}