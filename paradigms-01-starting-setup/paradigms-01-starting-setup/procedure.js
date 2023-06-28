const form = document.getElementById("user-input");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function signUpHandler(event) {
  event.preventDefault();
  const userName = userNameInput.value.trim();
  const password = passwordInput.value.trim();

  if (userName.trim().length === 0) {
    alert("Please enter your username");
    return;
  }
  if (password.trim().length <= 5) {
    alert("Please enter your password.");
    return;
  }

  const user = { username: userName, password: password };
  console.log(user);
}

form.addEventListener("submit", signUpHandler);
