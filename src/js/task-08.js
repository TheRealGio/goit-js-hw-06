const loginForm = document.querySelector("form.login-form");

const submitBehavior = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);
  loginForm.reset();
};

loginForm.addEventListener("submit", submitBehavior);
