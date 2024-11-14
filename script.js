// scripts.js
let clickCount = 0;

// Load the previous click count from localStorage or start from 0
window.onload = () => {
  clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
  updateClickCountDisplay();
};

// Function to handle image click
document.getElementById('icon').addEventListener('click', () => {
  clickCount++;
  localStorage.setItem('clickCount', clickCount);
  updateClickCountDisplay();
});

// Function to update the display of click count
function updateClickCountDisplay() {
  document.getElementById('click-count').innerText = `narin has been mad for ${clickCount} times`;
}
