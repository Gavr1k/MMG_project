const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
    // headerMenu.remove('.header__nav-active')
    console.log(headerMenu)
});

window.onclick = burgerFunc;

function burgerFunc(event) {
    if(event.target.classList.value == 'header__nav' &&
       event.target.classList.value == 'header__list' &&
       event.target.classList.value == 'header__item' &&
       event.target.classList.value == 'header__link' &&
       event.target.classList.value == 'header__burger')
       {
        return;
       }
       else
       {
        headerMenu.className += 'header__nav-active';
       }
}

// document.addEventListener('click', () => {
//     console.log(this)
// })