// Conectar com a API utilizando o FETCH
fetch('https://raw.githubusercontent.com/JPfilgueira/CPF/refs/heads/main/dados2.json')
    .then(resposta => resposta.json())
    .then(corpo => {
        // Criar uma div para cada música e adicionar ao container
        corpo.forEach((musica, index) => {
            const musicaDiv = document.createElement('div');
            musicaDiv.className = 'musica';
            musicaDiv.innerHTML = `
                <div class="imagem">${musica.imagem}</div>
                <div class="nome">${musica.nome}</div>
                <div class="preco">${musica.price}</div>
                <button id="comprar${index}">Comprar</button>
                <div id="descricao${index}" class="descricaoDaMusica" style="display: none;"></div>
            `;
            document.getElementById('musicas-container').appendChild(musicaDiv);
            
            // Adicionar evento ao botão de compra
            document.getElementById(`comprar${index}`).addEventListener('click', () => {
                mostrarDescricao(musica, index); // Mostrar informações da música
            });
        });
    })
    .catch(error => {
        console.error('Houve um problema com a operação fetch:', error);
    });

// Função para mostrar a descrição da música correspondente
function mostrarDescricao(musicaData, index) {
    const descricaoDiv = document.getElementById(`descricao${index}`);
    descricaoDiv.innerHTML = `
        <strong>Álbum:</strong> ${musicaData.album} <br>
        <strong>Estilo:</strong> ${musicaData.style} <br>
        <strong>Plataformas:</strong> ${musicaData.platforms} <br>
        <strong>Preço:</strong> ${musicaData.price}
    `;
    descricaoDiv.style.display = 'block'; // Exibe a descrição
}
