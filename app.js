const locate = document.querySelector("#location");
const apiKey = "d8a4a37424c5197df966aa6f8804dbcc";
const check = document.querySelector("#check");
const result = document.querySelector('#result');
const weatherApp = document.querySelector("#weatherApp");

function onChange() {
  console.log('changed');
}
check.addEventListener("click", () => {
  const weatherResult = async function () {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${locate.value}&appid=${apiKey}`
      );
      const data = await res.json();
      result.innerHTML = 'Your weather is ' + JSON.stringify(data.main.temp) + " celsius";
    } catch (error) {
        alert('Check your internet connection' + error)
    }
  };

  weatherResult() 
});
