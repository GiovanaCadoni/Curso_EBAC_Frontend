const form = document.getElementById('form-media');
const valorX = document.getElementById('goodNote');
const valorY = document.getElementById('badNote');

function calcularNumero (numeros) {
    numeros = valorX.value > valorY.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = 'A média deste semestre é &nbsp;<b>$(valorX.value)</b> &nbsp; superando o semestre anterior que teve a média de &nbsp; <b>${valorY}</b>';
    const mensagemErro = 'A média deste semestre é &nbsp;<b>$(valorX.value)</b> &nbsp; o que torna insatifatórios os resultados se comparados com o semestre anterior que foi de &nbsp; <b>${valorY}</b>'
    if (calcularNumero()) {
        document.querySelector('#mensagem').innerHTML = mensagemSucesso;
        document.querySelector('#mensagem').classList.add('sucess-message');
        document.querySelector('#mensagem').classList.remove('error-message');
        document.querySelector('#mensagem').style.display = 'flex';
    } else {
        document.querySelector('#mensagem').innerHTML = mensagemErro;
        document.querySelector('#mensagem').style.display = 'flex';
        document.querySelector('#mensagem').classList.remove('sucess-message');
        document.querySelector('#mensagem').classList.add('error-message');
    }
})
