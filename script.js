// Configuração simulada do Firebase (substitua pelos seus dados reais)
const firebaseConfig = {
    apiKey: "sua-api-key",
    authDomain: "seu-projeto.firebaseapp.com",
    projectId: "seu-projeto",
    storageBucket: "seu-projeto.appspot.com",
    messagingSenderId: "seu-sender-id",
    appId: "seu-app-id"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Carrinho
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
        // Simulação de integração com Mercado Pago (substitua por API real)
        const preferencia = {
            items: carrinho.map(item => ({
                title: item.nome,
                unit_price: item.preco,
                quantity: 1
            })),
            back_urls: {
                success: window.location.href,
                failure: window.location.href
            }
        };
        alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}\nSimulação de pagamento com Mercado Pago. Para prosseguir, entre em contato ou configure a API em: https://www.mercadopago.com.br/developers/pt/docs`);
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}

// Menu hamburguer
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Formulário de contato
document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    if (nome && email && mensagem) {
        // Simulação de salvamento no Firebase
        db.collection("contatos").add({
            nome: nome,
            email: email,
            mensagem: mensagem,
            data: new Date()
        }).then(() => {
            alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nNossa equipe entrará em contato em breve.`);
            document.getElementById('form-contato').reset();
        }).catch((error) => {
            alert('Erro ao enviar mensagem. Tente novamente ou configure o Firebase.');
            console.error("Erro:", error);
        });
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
