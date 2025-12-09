let 


CITY_NAME = document.getElementById('city')
let para = document.getElementsByTagName("p")
let heading_name = document.getElementsByTagName("h2")
let resultBox = document.getElementById("result-box");
const API_KEYS = "a1a3fe4722b5799f97ce453cb881ea84"


async function weathercall() {
  console.log(CITY_NAME.value);
const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME.value}&appid=${API_KEYS}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not Found')
    }
    const data = await response.json();
    console.log(data);
    resultBox.style.display = "block"
   
    heading_name[0].innerText = data.name;

    para[0].innerText = `Temperature : ${parseInt(data.main.temp)}°C `
    para[1].innerText = `Max temp : ${parseInt(data.main.temp_max) + 3} °C Min temp : ${parseInt(data.main.temp_min) - 3}°C`
    para[2].innerText = `wind speed : ${data.wind.speed}m/s `
    para[3].innerText = `Humidity : ${data.main.humidity}% `
    para[4].innerText  = `Clouds : ${data.clouds.all}% `
  } catch (error) {
    alert(error)

}
}