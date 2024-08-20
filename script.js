const button = document.getElementById("toggleButton");
const text = document.getElementById("text");
const container = document.getElementById("container");

let toggled = false;

button.addEventListener("click", function () {
    if (toggled) {
        button.textContent = "Before button is pressed";
        text.textContent = "Initial State";
        container.style.backgroundColor = "#f0f0f0";
    } else {
        button.textContent = "After button is pressed";
        text.textContent = "Final state";
        container.style.backgroundColor = "#Ffff00";
    }
    toggled = !toggled;
});
