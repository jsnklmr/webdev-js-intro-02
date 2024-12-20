"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "do better";
const year = 2025
let willMeetResolution = "yes";
function updateYear() {
    // write the logic
    yearElement.innerText = year;
}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;
}

function updateWillMeetResolution() {
    willMeetResolutionElement.innerText = willMeetResolution ? "Yes" : "No"; // Displays "Yes" or "No"
}

function render() {
    // Finish writing this function
    updateYear(); // Updates the year
    updateResolution(); // Updates the resolution
    updateWillMeetResolution();
}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();
})
