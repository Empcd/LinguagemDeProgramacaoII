function loadProdutos(){
    const produtos = document.getElementById('produtos');
    fetch('http://localhost:38000/app/produtos')
    .then(r => r.json())
    .then(data => {
        const conteudo = data.map(p => `
        <div class="card" style="width: 18rem;">
            <img src="/images/${p.imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${p.nome}e</h5>
                <p class="card-text">${p.descricao}.</p>
                <a href="#" class="btn btn-primary">Comprar por ${p.preco}</a>
                <a href="/formulario.html?id=${p.id}" class="btn btn-default">Editar Produto</a>
            </div>
            </div>
        `).join('');
        produtos.innerHTML = conteudo;
    })

   
}
loadProdutos();