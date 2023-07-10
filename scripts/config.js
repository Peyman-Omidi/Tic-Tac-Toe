function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error')
  errorOutputElement.textContent = ''
}
function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();
  if (!enteredPlayerName) {
    // enteredPlayedName === ""

    errorOutputElement.textContent = "please enter a valid name!";
    event.target.firstElementChild.classList.add('error')
    return;
  }
}
