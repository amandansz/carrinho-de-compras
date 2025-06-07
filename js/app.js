let totalGeral;
limpar();

function adicionar() {
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim();
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // validação para evitar NaN
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida maior que 0.');
        return;
    }

    // calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    // adicionar no carrinho (corrigido: template string com crase ``)
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
    </section>`;

    // atualizar o valor total (corrigido: template string + fix decimal)
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

    // corrigido: getElementById escrito errado
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

  