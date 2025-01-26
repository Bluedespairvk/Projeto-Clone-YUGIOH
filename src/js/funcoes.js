const btnavancar = document.getElementById('btn-avancar');

const btnvoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

btnavancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado")
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
});

btnvoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado")
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add('selecionado');
});
