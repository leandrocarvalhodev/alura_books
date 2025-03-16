let ordenarPorPreco = document.getElementById('btnOrdenarPorPreco')
ordenarPorPreco.addEventListener('click', oredenarLivrosPorPreco)

function oredenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}