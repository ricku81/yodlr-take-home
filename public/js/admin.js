function fetchUsers() {
  // retrieve users
  fetch("/users")
    .then((response) => response.json())
    .then((users) => {
      const container = document.querySelector(".container");

      users.forEach((user) => {
        // create a div for each user
        const userDiv = document.createElement("div");
        const userDiv1 = document.createElement("div");
        const userDiv2 = document.createElement("div");

        userDiv.classList.add(
          "container",
          "mt-2",
          "border",
          "p-2",
          "rounded",
          "bg-light",
        );
        userDiv.textContent = `Email: ${user.email}`;
        userDiv1.textContent = `Name: ${user.firstName} ${user.lastName}`;
        userDiv2.textContent = `State: ${user.state}`;
        userDiv.appendChild(userDiv1);
        userDiv.appendChild(userDiv2);
        container.appendChild(userDiv);
      });
    });
}

fetchUsers();
