window.addEventListener("DOMContentLoaded", function() {

const name =prompt("Enter your name:")
const age = prompt("Enter your age:")

document.getElementById("content").textContent =
"Hello my name is " + name + "! I am " + age + " years old.";
});