const nameButtons = document.querySelectorAll(".name-button");

nameButtons.forEach((nameButton) => {
	nameButton.addEventListener("click", () => {
		alert(`Du klickade på ${nameButton.dataset.name}!`);
	});
});

