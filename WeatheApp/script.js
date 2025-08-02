
const getBtn = document.querySelector("button");

async function getWeatherData() {
  const place = document.getElementById("location").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  // Clear previous data and reset color
  weatherInfo.innerText = "";
  weatherInfo.style.color = "white";

  console.log("📍 Location entered:", place);

  // 🟥 Handle blank input
  if (place === "") {
    weatherInfo.innerText = "⚠️ Please enter a location.";
    return;
  }

  // ✅ Show weather info
  const updateTemp = (data) => {
    console.log("✅ Weather data received:", data);
    const locationName = `${data.location.name}, ${data.location.country}`;

    weatherInfo.innerHTML = `
      <img src="${data.current.condition.icon}" alt="weather icon">
      <p><strong>📍 ${locationName}</strong></p>
      <p>⛅ Condition: ${data.current.condition.text}</p>
      <p>🌡️ Temperature: ${data.current.temp_c}°C</p>
      <p>💧 Humidity: ${data.current.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.current.wind_kph} km/h</p>
    `;
  };

  // ❌ Handle error
  const showError = (message) => {
    console.error("❌ Error occurred:", message);
    weatherInfo.style.color = "white";
    weatherInfo.innerText = `⚠️ ${message}`;
  };

  // 🌐 Fetch weather data
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=16b59ec4359f472aa18184551251901&q=${place}&aqi=yes`);

    if (!response.ok) {
      if (response.status === 400) {
        showError("Invalid request. Please enter a valid location.");
      } else {
        showError("City not found. Please check the spelling.");
      }
      return;
    }

    const data = await response.json();

    if (data.error) {
      showError(data.error.message || "Location not found.");
      return;
    }

    updateTemp(data);

  } catch (error) {
    showError("Network error. Please check your internet connection.");
  }
}  

getBtn.addEventListener("click", getWeatherData);

