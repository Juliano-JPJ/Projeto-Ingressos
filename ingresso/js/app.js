function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
    
    if(tipoIngresso.value == 'pista') {
        ingressoPista(quantidade);
    } else if(tipoIngresso.value == 'superior') {
        ingressoSuperior(quantidade);
    } else {
        ingressoInferior(quantidade);
    }
}

function ingressoPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista) {
        alert('Quantidade de ingressos indisponível para compra');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso');

    }
}

function ingressoSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadeSuperior) {
        alert('Quantidade de ingressos indisponível para compra');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso');
    }
}

function ingressoInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > quantidadeInferior) {
        alert('Quantidade de ingressos indisponível para compra');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso');
    }
}
