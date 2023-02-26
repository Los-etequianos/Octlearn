const menu = document.querySelector('nav');

function activeScrool(){
    menu.classList.toggle('ativo', scrollY > 550);
    menu.classList.toggle('roxo', scrollY > 2610);
    menu.classList.toggle('mudar_roxo', scrollY > 2600);
}

window.addEventListener('scroll', activeScrool);