const form = document.querySelector("form") as HTMLFormElement;
const h1 = document.querySelector("h1") as HTMLHeadingElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const targetForm = event.target as HTMLFormElement;
  const firstInput = targetForm.querySelector(
    "input:first-child"
  ) as HTMLInputElement;

  h1.innerHTML = calculateAge(firstInput.value).toString();
});

function calculateAge(dateOfBirth: string): number {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);

  const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Taking into account leap years
  const ageInYears = ageInMilliseconds / millisecondsInYear;

  const age = Math.floor(ageInYears);

  return age;
}
