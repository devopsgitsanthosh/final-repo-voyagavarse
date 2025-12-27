const form = document.getElementById("registerForm");
const strengthText = document.getElementById("passwordStrength");
const errorText = document.getElementById("regError");

document.getElementById("regPassword").addEventListener("input", (e) => {
  const val = e.target.value;
  if (val.length < 6) {
    strengthText.textContent = "Weak password ❌";
    strengthText.style.color = "red";
  } else if (val.length < 10) {
    strengthText.textContent = "Medium password ⚠️";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strong password ✅";
    strengthText.style.color = "green";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = regName.value;
  const email = regEmail.value;
  const password = regPassword.value;

  if (password.length < 6) {
    errorText.textContent = "Password must be at least 6 characters";
    return;
  }

  localStorage.setItem("voyageverseUser", JSON.stringify({ name, email, password }));
  window.location.href = "signin.html";
});
