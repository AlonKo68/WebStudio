// const sm = 320;
// const md = 768;
// const ld = 1158;
// function screenWidth(value) {
//     if (value <= 380) {
//         return "Mobile screen";
//     } else if (value > 380 && value <= 720) {
//         return "Tablet screen";
//     } else if (value > 720 && value <= 1280) {
//         return "Desktop screen";
//     } else {
//         return "Godzilla screen";
//     }
// }
// const result = screenWidth();

// window.addEventListener("resize", (event) => {
//     console.log(screenWidth(event.currentTarget.innerWidth));
// });

// const root = document.querySelector(':root');
// const isChangeBackgroundColor = confirm('Change color dark?');
// const rootStyles = getComputedStyle(root);
// console.log(rootStyles.getPropertyValue('--white')); //#fff
// if (isChangeBackgroundColor) {
//     root.style.setProperty('--white', 'black')
// }

const img = new Image();
img.fetchPriority = "high";
img.src = "images/1_hero/img_mob@1x.jpg";

// header
const navLink = document.querySelectorAll('.nav-link, .menu-nav-link, .menu-contacts-link');
navLink.forEach((link) => {
    link.addEventListener('mouseover', handler);
    link.addEventListener('mouseout', handler);
    link.addEventListener('click', handlerClick);
    function handler() {
        this.classList.toggle('active-js');
        this.classList.toggle('active::after');
    }
});
function handlerClick() {
    this.classList.remove('active::after');
}

//hero
const btnHero = document.querySelector('.hero-btn');
btnHero.addEventListener('mouseover', changeColor);
btnHero.addEventListener('mouseout', changeColor);
function changeColor() {
    btnHero.classList.toggle('btn-js')
}


// modal window open/close 
function handlerOpenCloseForm() {
    modalWindow.classList.toggle('is-open');
}
const modalWindow = document.querySelector('.backdrop');
btnHero.addEventListener('click', handlerOpenCloseForm);
const btnFormClose = document.querySelector('.modal-btn');
btnFormClose.addEventListener('click', handlerOpenCloseForm);

//mobile menu open/close
function handlerOpenCloseMenu() {
    mobileMenu.classList.toggle('menu-js');
}
const mobileMenu = document.querySelector('.menu')
const btnMenuOpen = document.querySelector('.menu-btn-open');
btnMenuOpen.addEventListener('click', handlerOpenCloseMenu);
const btnMenuClose = document.querySelector('.menu-btn-close');
btnMenuClose.addEventListener('click', handlerOpenCloseMenu);

//benefits
const benefitsIcons = document.querySelectorAll('.benefits-wrapper-icon');
benefitsIcons.forEach((icon) => {
    icon.addEventListener('mouseover', changeBorder);
    icon.addEventListener('mouseout', changeBorder);
    function changeBorder() {
        icon.classList.toggle('benefits-icon-js');
    }
})

//footer
const formSubscribe = document.querySelector('.form-subscribe');
formSubscribe.addEventListener('submit', submit);

//modal window submit
const modalForm = document.querySelector('.modal-form');
modalForm.addEventListener('submit', submit);
function submit(evt) {
    evt.preventDefault();
    // console.log('submit');
    // console.dir(evt.currentTarget);

    const formData = new FormData(evt.currentTarget);
    // console.log(formData);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    // console.log(data);
    const json = JSON.stringify(data);
    console.log(json);
}

//mobile menu

