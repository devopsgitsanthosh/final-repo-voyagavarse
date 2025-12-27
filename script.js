const API_KEY = "b4167cf04493c066c7534029d6e671de";

const cities = [
  { name: "Rome", country: "IT", elementId: "weather-rome" },
  { name: "London", country: "GB", elementId: "weather-london" },
  { name: "Paris", country: "FR", elementId: "weather-paris" }
];

function getLocalTime(timezone) {
  const localTime = new Date(
    new Date().getTime() + timezone * 1000
  );
  return localTime.toUTCString().slice(17, 25);
}

document.addEventListener("DOMContentLoaded", () => {
  cities.forEach(city => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const time = getLocalTime(data.timezone);

        document.getElementById(city.elementId).innerHTML = `
          <div class="temp">🌡️ ${temp.toFixed(1)}°C</div>
          <div class="condition">🌤️ ${weather}</div>
          <div class="time">⏰ ${time}</div>
        `;
      })
      .catch(() => {
        document.getElementById(city.elementId).innerHTML =
          "<div>Weather not available</div>";
      });
  });

  // 🔐 Navbar Navigation
  document.getElementById("loginBtn")?.addEventListener("click", () => {
    window.location.href = "signin.html";
  });

  document.getElementById("registerBtn")?.addEventListener("click", () => {
    window.location.href = "register.html";
  });

  // 👤 Login state UI
  const user = JSON.parse(localStorage.getItem("voyageverseUser"));
const isLoggedIn = localStorage.getItem("isLoggedIn");
const nav = document.querySelector(".nav-button");

if (isLoggedIn && user && nav) {
  nav.innerHTML = `
    <span>Hello, ${user.name} 👋</span>
    <button class="btn" id="logoutBtn">Logout</button>
  `;

  document.getElementById("logoutBtn").onclick = () => {
    localStorage.clear();
    location.reload();
  };
}

 


});
