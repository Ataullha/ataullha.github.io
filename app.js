// Select the element where the year will be added
const yearElement = document.getElementById('year');

// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Set the text content of the element to the current year
yearElement.textContent = currentYear;