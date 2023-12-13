console.log("Loaded JS");
let amountScrolled = 0;
const SCROLL_MULT = 105;
const MAX_TOP = 0;
var MAX_BOTTOM = 800;
const scrollables = document.getElementsByClassName("scrollable");


function setScroll(dir) {
    if (dir > 0) {
        if (amountScrolled >= MAX_BOTTOM) {
            return
        }
        amountScrolled += (1 * SCROLL_MULT);
    }
    else if (dir < 0) {
        if (amountScrolled <= 0) {
            return;
        }
        amountScrolled -= (1 * SCROLL_MULT);
    }
}

function moveItem(i, delay) {
    i.animate(
        {transform: 'translateY('+(-amountScrolled)+'px)'},
        {easing: 'ease-in-out', duration: parseInt(delay), fill: 'forwards'}
    )
}

document.addEventListener("wheel", e => {
    setScroll(e.deltaY);
    for (var i = 0; i < scrollables.length; i++) {
        moveItem(scrollables[i], scrollables[i].getAttribute('delay'));
    }
}) 


// THEMES


const html = document.querySelector('html');
html.dataset.theme = 'darkmode'
var color_scheme = 'dark';

function darkMode() {
    html.dataset.theme = 'darkmode'
    color_scheme = 'dark';
}

function lightMode() {
    html.dataset.theme = 'lightmode'
    color_scheme = 'light';
}

function toggleColors() {
    if(color_scheme == 'dark') {
        lightMode();
    }
    else {
        darkMode();
    }
}