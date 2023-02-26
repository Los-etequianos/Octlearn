const menu = document.querySelector('nav');

function activeScrool(){
    menu.classList.toggle('ativo', scrollY > 550);
    menu.classList.toggle('roxo', scrollY > 2640);
}

window.addEventListener('scroll', activeScrool);