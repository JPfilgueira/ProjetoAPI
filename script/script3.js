function buscar() {
    fetch('https://raw.githubusercontent.com/JPfilgueira/E-Commerce/refs/heads/main/dados.json')
        .then(resposta => resposta.json())
        .then(corpo => {
            var identificador = document.getElementById('valor').value;
            var encontrado = false;

            corpo.forEach(pessoa => {
                if (identificador === pessoa.cpf) {
                    encontrado = true; // CPF encontrado
                    document.getElementById('imagem').innerHTML = pessoa.imagem;
                    document.getElementById('nome').innerHTML = pessoa.nome;
                    document.getElementById('idade').innerHTML = pessoa.idade;
                    document.getElementById('pais').innerHTML = pessoa.pais;
                    document.getElementById('estado').innerHTML = pessoa.estado;
                    document.getElementById('cidade').innerHTML = pessoa.cidade;
                }
            });

            if (!encontrado) {
                document.getElementById('erro').innerHTML = "Registro inválido";
            } else {
                document.getElementById('erro').innerHTML = ""; // Limpa a mensagem de erro se encontrado
            }
            console.log(corpo);
        });
}
