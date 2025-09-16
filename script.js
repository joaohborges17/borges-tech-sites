let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
    } else {
        alert('Compra finalizada! Total: R$ ' + total.toFixed(2));
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}
