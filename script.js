const menuButton = document.querySelector('.menu--button');
const headerMenu = document.querySelector('.header--menu');
const header = document.querySelector('.header');
menuButton.addEventListener('click', () => {
    headerMenu.classList.toggle('menu--active');
});
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        header.classList.add('header--moved');
    } else {
        header.classList.remove('header--moved');
    }
});


    // Loader


const loaderElement = document.getElementById('loader');
window.addEventListener('load', ()=>{
    loaderElement.classList.toggle('loader2');
})