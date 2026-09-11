addEventListener("DOMContentLoaded", (event) =>
{
    const mainButton = document.getElementById("mainButton");
    const logo = document.getElementById("logo");

    mainButton.addEventListener("click", (e) =>
    {
        mainButton.style.backgroundColor = "green"
        logo.classList.add("logoFall");
    });
});
