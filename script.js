const form = document.getElementById("form");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const innerForm = element.parentElement;
  const errorDisplay = innerForm.querySelector(".error");
  errorDisplay.innerText = message;
  innerForm.classList.add("error");
  innerForm.classList.remove("success");
};

const setSuccess = (element) => {
  const innerForm = element.parentElement;
  const errorDisplay = innerForm.querySelector(".error");
  errorDisplay.innerText = "";
  innerForm.classList.add("success");
  innerForm.classList.remove("error");
};

const validateInputs = () => {
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password, "* Passwords do not match");
    setError(password2, "");
  } else {
    setSuccess(password2);
  }
};
