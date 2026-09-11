const nameButtons = document.querySelectorAll(".name-button");
const personDescription = document.querySelector("#person-description");

nameButtons.forEach((nameButton) => {
	nameButton.addEventListener("click", () => {
		personDescription.textContent = `${nameButton.dataset.name}: ${nameButton.dataset.description}`;
	});
});

