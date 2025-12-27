const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("loginError");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("voyageverseUser"));
  const email = loginEmail.value;
  const password = loginPassword.value;

  if (!user || email !== user.email || password !== user.password) {
    errorText.textContent = "Invalid email or password";
    return;
  }

  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "index.html";
});
