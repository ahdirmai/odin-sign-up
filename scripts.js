document.getElementById("email").addEventListener("input", validateEmail);
document
  .getElementById("phone_number")
  .addEventListener("input", validatePhoneNumber);
document
  .getElementById("password")
  .addEventListener("input", validatePasswords);
document
  .getElementById("confirm_password")
  .addEventListener("input", validatePasswords);

function validateEmail() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("email-error");
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phone_number").value;
  var phoneError = document.getElementById("phone-error");
  var phonePattern = /^\d+$/;

  if (!phonePattern.test(phoneNumber)) {
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
}

function validatePasswords() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm_password").value;
  var passwordError = document.getElementById("password-error");

  if (password !== confirmPassword) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
}

function validateForm() {
  validateEmail();
  validatePhoneNumber();
  validatePasswords();

  var emailError = document.getElementById("email-error").style.display;
  var phoneError = document.getElementById("phone-error").style.display;
  var passwordError = document.getElementById("password-error").style.display;

  if (
    emailError === "none" &&
    phoneError === "none" &&
    passwordError === "none"
  ) {
    return true;
  } else {
    return false;
  }
}
