const button = document.getElementById("mainButton");
const message = document.getElementById("message");
const hero = document.querySelector(".hero");

button.addEventListener("click", function () {
    message.classList.toggle("hidden");
    hero.classList.toggle("active");

    if (message.classList.contains("hidden")) {
        button.textContent = "Visa vår styrka";
    } else {
        button.textContent = "Dölj meddelande";
    }
});