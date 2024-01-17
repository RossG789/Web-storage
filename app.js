const colourForm = document.getElementById("colourForm");

function changeBg(col) {
  document.body.style.backgroundColor = col;
}

function handleSubmit(event) {
  event.preventDefault();
  const myColour = event.target.colour.value;
  changeBg(myColour);
  localStorage.setItem("localColour", myColour);
}

colourForm.addEventListener("submit", handleSubmit);

function getColour() {
  const localColour = localStorage.getItem("localColour");
  changeBg(localColour);
}

getColour();
