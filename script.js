// ############################## Remover acentos ###############################
function removeAcentos(textarea) {
    var textoSemAcentos = textarea.value.normalize('NFD').replace(/[\u0300-\u036f-\u007e-\u00b4-\u0060]/g, '');
    textarea.value = textoSemAcentos;
}

const textarea = document.getElementById('codeDecod');
textarea.addEventListener('keyup', () => {
    removeAcentos(textarea);
});
// ##############################################################################

// ############################ Codificador de texto ############################
function encriptar(texto, chave) {
    let textoEncriptado = '';
    for(let index = 0; index < texto.length; index += 1) {
        // Converte cada letra para seu valor numérico e soma com a chave
        let novoCaract = texto.charCodeAt(index) + chave;
        // Converte o novo valor numérico para caractere e adiciona a mensagem
        textoEncriptado += String.fromCharCode(novoCaract);
    }
    return textoEncriptado;
}

const btnCodificador = document.querySelector('.btnCodificar');
btnCodificador.addEventListener('click', () => {
    const texto = document.getElementById('codeDecod');
    const chave = 2;
    const textoEncriptado = encriptar(texto.value, chave);
    document.getElementById('txtResult').value = textoEncriptado;
    texto.value = '';
});
// ##############################################################################

// ########################### Decodificador de texto ###########################
function decriptar(texto, chave) {
    let textoDecriptado = '';
    for(let index = 0; index < texto.length; index += 1) {
        // Converte cada letra para seu valor numérico e subtrai com a chave
        let novoCaract = texto.charCodeAt(index) - chave;
        // Converte o novo valor numérico para caractere e adiciona a mensagem
        textoDecriptado += String.fromCharCode(novoCaract);
    }
    return textoDecriptado
}

const btnDecodificador = document.querySelector('.btnDecodificar');
btnDecodificador.addEventListener('click', () => {
    const texto = document.getElementById('codeDecod');
    const key = 2;
    const textoDecriptado = decriptar(texto.value, key)
    document.getElementById('txtResult').value = textoDecriptado;
    texto.value = '';
});
// ##############################################################################
