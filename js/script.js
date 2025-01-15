const sm = 320;
const md = 768;
const ld = 1158;
function screenWidth(value) {
    if (value <= 380) {
        return "Mobile screen";
    } else if (value > 380 && value <= 720) {
        return "Tablet screen";
    } else if (value > 720 && value <= 1280) {
        return "Desktop screen";
    } else {
        return "Godzilla screen";
    }
}
const result = screenWidth();

window.addEventListener("resize", (event) => {
    console.log(screenWidth(event.currentTarget.innerWidth));
});

// const root = document.querySelector(':root');
// const isChangeBackgroundColor = confirm('Change color dark?');
// const rootStyles = getComputedStyle(root);
// console.log(rootStyles.getPropertyValue('--white')); //#fff
// if (isChangeBackgroundColor) {
//     root.style.setProperty('--white', 'black')
// }