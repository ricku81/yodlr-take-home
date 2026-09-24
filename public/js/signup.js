const emailInput = document.getElementById("email");
const firstInput = document.getElementById("first");
const lastInput = document.getElementById("last");
const form = document.getElementById("signup-form");
const submitButton = document.querySelector('button[type="submit"]');

//Enable submit button only if email is entered
const validate = () => {
  submitButton.disabled =
    !emailInput.value || !firstInput.value || !lastInput.value;
};
emailInput.addEventListener("input", validate);
firstInput.addEventListener("input", validate);
lastInput.addEventListener("input", validate);

// Handle form submission by adding user data to the server via fetch API
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (submitButton.disabled) {
    return;
  }

  const response = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailInput.value.trim(),
      firstName: firstInput.value.trim(),
      lastName: lastInput.value.trim(),
    }),
  });

  if (response.ok) {
    form.reset(); // Reset the form fields after successful signup
    validate();
    alert("Signup successful.");
    window.location.href = "/admin.html";
  } else {
    alert("Signup failed.");
  }
});
