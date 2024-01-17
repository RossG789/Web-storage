const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  const formData = new FormData(event.target);
  const colour = formData.get("colour");
  localStorage.setItem("colour", colour);
});

const colour = localStorage.getItem("colour");
if (colour) {
  const input = document.querySelector("input");
  input.value = colour;
}
