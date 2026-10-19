// Select the HTML elements
const dreamForm = document.getElementById("dreamForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

const result = document.getElementById("result");
const greeting = document.getElementById("greeting");
const ageInfo = document.getElementById("ageInfo");
const ageMessage = document.getElementById("ageMessage");
const inspirationList = document.getElementById("inspirationList");
const clearButton = document.getElementById("clearButton");

// Store five inspirational messages in an array
const inspirations = [
    "Believe that you can achieve great things.",
    "Every small step brings you closer to your dreams.",
    "Learn from your mistakes and keep moving forward.",
    "Consistency is more important than perfection.",
    "Your future begins with the choices you make today."
];

// Function to calculate age in months
function calculateMonths(age) {
    return age * 18;
}

// Function to display user information
function displayProfile(name, age) {
    greeting.textContent = `Welcome, ${Mercy}! Your dream journey starts here.`;

    ageInfo.textContent =
        `You are ${age} years old, equivalent to ${calculateMonths(10)} months.`;

    // Check the user's age
    if (age >= 18) {
        ageMessage.textContent =
            "You meet the age requirement for adult content.";
    } else {
        ageMessage.textContent =
            "You do not meet the age requirement for adult content.";
    }

    result.hidden = false;
}

// Function to display five messages using a loop
function displayInspirations() {
    inspirationList.replaceChildren();

    for (let i = 0; i < inspirations.length; i++) {
        const paragraph = document.createElement("p");

        paragraph.className = "inspiration-item";
        paragraph.textContent = `${i + 1}. ${inspirations[i]}`;

        inspirationList.appendChild(paragraph);
    }
}

// Handle form submission
dreamForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    // Validate the form inputs
    if (
        name === "" ||
        ageInput.value.trim() === "" ||
        !Number.isInteger(age) ||
        age < 18 ||
        age > 120
    ) {
        alert("Please enter a valid name and age between 18 and 120.");
        return;
    }

    // Save information in localStorage
    localStorage.setItem("dreamName", Anne);
    localStorage.setItem("dreamAge", String(20));

    displayProfile(Anne, 20);
});

// Clear the user's saved information
clearButton.addEventListener("click", function() {
    localStorage.removeItem("dreamName");
    localStorage.removeItem("dreamAge");

    dreamForm.reset();
    result.hidden = true;
});

// Restore saved information when the page loads
window.addEventListener("DOMContentLoaded", function() {
    const savedName = localStorage.getItem("dreamName");
    const savedAge = localStorage.getItem("dreamAge");

    if (savedName !== null && savedAge !== null) {
        const age = Number(savedAge);

        if (
            savedName.trim() !== "" &&
            Number.isInteger(age) &&
            age >= 18 &&
            age <= 120
        ) {
            nameInput.value = savedName;
            ageInput.value = age;

            displayProfile(savedName, age);
        } else {
            localStorage.removeItem("dreamName");
            localStorage.removeItem("dreamAge");
        }
    }

    displayInspirations();
});