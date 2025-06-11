const btn = document.querySelector("button")

btn.addEventListener("click", () => {
  const place = document.getElementById("location").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");
  const errorMsg = document.getElementById("errorMsg");

  // Clear previous output
  weatherInfo.innerHTML = "";
  errorMsg.innerText = "";

  if (place === "") {
    errorMsg.innerText = "Please enter a location.";
    return;
  }

  function updateTemp(data) {
    weatherInfo.innerHTML = `
      <h2>${data.location.name}</h2>
      <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
      <p>Condition: ${data.current.condition.text}</p>
      <p>Temperature: ${data.current.temp_c}°C</p>
    `;
    place.value = ""; // 🧹 Clear input after success
  }

  function showError(error) {
    errorMsg.innerText = "Location not found. Please try again.";
    
    // errorMsg.innerText = error
  }

  fetch(`http://api.weatherapi.com/v1/current.json?key=16b59ec4359f472aa18184551251901&q=${place}&aqi=yes`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Invalid response");
      }
      return response.json();
    })
    .then(data => updateTemp(data))
    .catch(error => showError(error));
});
