console.log("loading script")

const targetEl = document.getElementById("target-text");
const typedEl = document.getElementById("typed-text");
const wpmEl = document.getElementById("wpm-display");
const accEl = document.getElementById("accuracy-display");
const instructions = document.getElementById("instructions");

let targetText = "start senetence nla sdafjhdsklfs osfidhfous ";
let typed = "";

function render() {
  targetEl.textContent = targetText;
  typedEl.textContent = typed;
}
render();

let startTime = null;

/*  calcs wpm
    elapsed time in miliseconds since typing began is converted m
    assumes word length is 5 and devides
*/

function calcWPM() {
  if (!startTime) return 0;
  const minutes = (Date.now() - startTime) / 60000;
  const words = typed.length / 5;
  return Math.max(0, Math.round(words / Math.max(minutes, 1e-6))); //avoids division by 0 and rounds to integer
}
/*  compares typed txt to target txt and calcs accuracy %
    if nothing typed = 100
    loops caracters to find matches
*/
function calcAccuracy() {
  if (typed.length === 0) return 100;
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === targetText[i]) correct++;
  }
  return Math.round((correct / typed.length) * 100);
}

function updateStats() {
  wpmEl.textContent = "WPM: " + calcWPM();
  accEl.textContent = "Accuracy: " + calcAccuracy() + "%";
}

updateStats();

window.addEventListener("keydown", (e) => {
  if (!startTime) startTime = Date.now();

  if (e.key.length === 1) {
    typed += e.key;
  } else if (e.key === "Backspace") {
    typed = typed.slice(0, -1);
  } else if (e.key === "Enter") {
    typed += "\n";
  } else {
    return;
  }

  render();
  updateStats();
})