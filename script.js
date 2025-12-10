// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Change the main title when the page loads.
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Add the required 'data-action' attribute to the toggleButton.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Make all list items blue when the page loads.
function highlightListItems() {
  // Select all <li> elements inside the item list
  const listItems = document.querySelectorAll("#item-list li");

  listItems.forEach((li) => {
    li.style.color = "blue";
  });
}

// Run it on load
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---

// Helper function (Task 8): create and append a timestamp span
function createTimestamp() {
  const span = document.createElement("span");
  // Add a space before the time so timestamps don't stick together
  span.innerHTML = " " + new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Main toggle function (Tasks 5, 6, 7, 8)
function toggleStatus(e) {
  // Task 6: Prevent default anchor behavior (no jump/refresh)
  e.preventDefault();

  // Task 5: Toggle the hidden class on the status-output div
  statusOutput.classList.toggle("hidden");

  // Check visibility: if NOT hidden, it's visible
  const isVisible = !statusOutput.classList.contains("hidden");

  if (isVisible) {
    // Task 7: if visible, set main-title backgroundColor to yellow
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: create and append a new timestamp
    createTimestamp();
  } else {
    // If hidden, reset background color
    mainTitle.style.backgroundColor = "";
  }
}

// Add event listener to the toggle button (Task 5)
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Start flashing the controlPanel every 500ms
function startFlashing() {
  // Avoid creating multiple intervals
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Stop flashing the controlPanel
function stopFlashing() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  // Make sure the panel is visible when we stop
  controlPanel.classList.remove("hidden");
}

// Bind startFlashing to click, stopFlashing to dblclick on the timer button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
