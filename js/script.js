

const key  ="49b469d9b76097348d11dba8dd1c644e"

function printDados(dados) {
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name
  document.querySelector(".tempMin").innerHTML = Math.floor(dados.main.temp_min) + " °C Min"
  document.querySelector(".tempMax").innerHTML = Math.floor(dados.main.temp_max) + " °C Max"
  document.querySelector(".textPrevisao").innerHTML = dados.weather[0].description
  document.querySelector(".umidade").innerHTML = "Umidade em " + dados.main.humidity + "%"
  document.querySelector(".imgPrevisao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
  
  printDados(dados)
}

function clickButton() {
  const cidade = document.querySelector(".inputCity").value

  searchCity(cidade)
}
