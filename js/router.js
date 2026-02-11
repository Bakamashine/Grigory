/// Костыль для перехода по страницам минуя тег <a />


/** @type {HTMLImageElement} */
const command_button = document.querySelector(".command__item__image");
/** @type {HTMLDivElement} */
const header_logo = document.querySelector(".header__logo");
/** @type {HTMLDivElement} */
const header_name = document.querySelector(".header__name");

console.log("command_button: ", command_button);
console.log("header_logo: ", header_logo);
console.log("header_name: ", header_name);

function redirectToMainPage() {
    window.location.href="index.html"
}

if (command_button)
  command_button.addEventListener("click", () => {
    window.location.href = "/person_detail.html";
  });

if (header_logo)
    header_logo.addEventListener("click", redirectToMainPage)

if (header_name)
    header_name.addEventListener("click", redirectToMainPage)