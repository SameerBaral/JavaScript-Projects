const screen = document.getElementById("screen");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");

// Initialize counter from localStorage or default to 0
let count = parseInt(localStorage.getItem("counter")) || 0;
screen.innerText = count;

// Update screen and localStorage
function updateDisplay() {
  screen.innerText = count;
  localStorage.setItem("counter", count);
}

inc.addEventListener("click", () => {
  count++;
  updateDisplay();
});

dec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

res.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
