async function getWeather() {
    // Pegar o valor do input "cidade"
    var cidadeInput = document.getElementById('cidade');
    var cidade = cidadeInput.value;

    //Conectando a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //Variável para consumir o JSON do item temperatura
    var TempCelsius = resposta.data.main.temp;

    //Impressão no console
    console.log(TempCelsius)
    
    // Atualizar o campo de texto com a temperatura
    cidadeInput.value = `A temperatura de ${cidade} é: ${TempCelsius.toFixed(0)}°C`;
}
//Chamar a função
getWeather()