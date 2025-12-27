/* ================= FIREBASE IMPORTS (TOP ONLY) ================= */
import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* ================= WEATHER CONFIG ================= */
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

/* ================= DOM LOADED ================= */
document.addEventListener("DOMContentLoaded", () => {

  /* 🌦 WEATHER LOGIC */
  cities.forEach(city => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(data => {
        document.getElementById(city.elementId).innerHTML = `
          <div class="temp">🌡️ ${data.main.temp.toFixed(1)}°C</div>
          <div class="condition">🌤️ ${data.weather[0].description}</div>
          <div class="time">⏰ ${getLocalTime(data.timezone)}</div>
        `;
      })
      .catch(() => {
        document.getElementById(city.elementId).innerHTML =
          "<div>Weather not available</div>";
      });
  });
  const nav = document.querySelector(".nav-button");

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// // 🔐 Firebase auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    nav.innerHTML = `
      <span>Welcome 👋</span>
      <button class="btn" id="logoutBtn">Logout</button>
    `;
  } else {
    nav.innerHTML = `
      <button class="btn white-btn" id="loginBtn">Sign In</button>
      <button class="btn" id="registerBtn">Sign Up</button>
    `;
  }
});

// ✅ ONE click handler for ALL navbar actions
nav.addEventListener("click", (e) => {
  if (e.target.id === "logoutBtn") {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  }

  if (e.target.id === "loginBtn") {
    window.location.href = "signin.html";
  }

  if (e.target.id === "registerBtn") {
    window.location.href = "register.html";
  }
});

});
