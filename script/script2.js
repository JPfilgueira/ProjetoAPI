fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDólar').innerHTML = economia.USDBRL.bid;
    document.getElementById('maiorValor').innerHTML = economia.USDBRL.high;
    document.getElementById('menorValor').innerHTML = economia.USDBRL.low;
})