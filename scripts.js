const passwordBox = document.getElementById("password");
const successMessage = document.getElementById("success");
const errorMessage = document.getElementById("error");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  if (passwordBox.value.length > 0) {
    errorMessage.textContent = "";
    passwordBox.select();
    document.execCommand("copy");
    successMessage.textContent = "Password copied to clipboard.";
  } else {
    successMessage.textContent = "";
    errorMessage.textContent = "Please generate a password first.";
  }
}
