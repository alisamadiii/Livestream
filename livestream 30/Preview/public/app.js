"use strict";
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const targetForm = event.target;
    const firstInput = targetForm.querySelector("input:first-child");
    h1.innerHTML = calculateAge(firstInput.value).toString();
});
function calculateAge(dateOfBirth) {
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Taking into account leap years
    const ageInYears = ageInMilliseconds / millisecondsInYear;
    const age = Math.floor(ageInYears);
    return age;
}
