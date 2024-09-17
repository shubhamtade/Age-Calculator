// Get references to the input elements
const dateInput = document.getElementById("date");
const calculateButton = document.querySelector("button");
const resultParagraph = document.querySelector("p");

// Add an event listener to the button
calculateButton.addEventListener("click", calculateAge);

function calculateAge() {
  // Get the selected date from the input
  const selectedDate = new Date(dateInput.value);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const ageInMilliseconds = currentDate - selectedDate;

  // Convert milliseconds to years, months, and days
  const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
  const ageInMonths = ageInYears * 12;
  const ageInDays = ageInMilliseconds / (24 * 60 * 60 * 1000);

  // Extract whole years, months, and days
  const wholeYears = Math.floor(ageInYears);
  const wholeMonths = Math.floor(ageInMonths % 12);
  const wholeDays = Math.floor(ageInDays % 30); // Approximate days in a month

  // Display the result
  resultParagraph.innerHTML = `You are <span>${wholeYears}</span> Year, <span>${wholeMonths}</span> Month, and <span>${wholeDays}</span> Days old.`;
}
