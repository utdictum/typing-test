console.log("loading script")

const targetEl = document.getElementById("target-text");
const typedEl = document.getElementById("typed-text");
const wpmEl = document.getElementById("wpm-display");
const accEl = document.getElementById("accuracy-display");
const instructions = document.getElementById("instructions");

let targetText = "Start typing to begin the test.";
let typed = "";

function render() {
  targetEl.textContent = targetText;
  typedEl.textContent = typed;
}
render();