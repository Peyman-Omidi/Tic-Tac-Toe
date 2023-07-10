function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid // +'1" ==> 1
  playerConfigOverlayElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backDropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error')
  errorOutputElement.textContent = ''
  formElement.firstElementChild.lastElementChild.value = ''
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

  const updatePlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatePlayerDataElement.children[1].textContent = enteredPlayerName

  // if (editedPlayer===1) {
  //   players[0].name = enteredPlayerName
  // } else {
  //   players[1].name = enteredPlayerName
  // }

  players[editedPlayer-1].name = enteredPlayerName

  closePlayerConfig();
}
