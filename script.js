const dropdownToggle = document.querySelector(".dropdown-toggle");
//Dropdown
dropdownToggle.addEventListener("click", () => {
  const dropdownMenu = document.querySelector("#dropdown > .menu");
  dropdownMenu.classList.toggle("open");
  dropdownToggle.classList.toggle("open");
});

dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        const selectedFriend = event.target.textContent;
        document.getElementById("friend-name").textContent = selectedFriend;
        dropdownMenu.classList.remove("open");
        dropdownToggle.classList.remove("open");
    }
});