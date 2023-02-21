const body = document.querySelector("body");
sidebar = body.querySelector(".menu-geral");
toggle = body.querySelector(".toggle");
modeSwitch = body.querySelector(".toggle-switch");
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("fechado");
});
