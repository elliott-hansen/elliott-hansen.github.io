const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");

let p1_active = false;
let p2_active = false;
let p3_active = false;
let p4_active = false;
let p5_active = false;
let p6_active = false;
let p7_active = false;

function displayBlock(block, state) {
    if (state) {
    }
    else {
        console.log('activating '+block)
    }
}

p1.addEventListener('click', displayBlock(p1, p1_active));
p2.addEventListener('click', displayBlock(p2, p2_active));
p3.addEventListener('click', displayBlock(p3, p3_active));
p4.addEventListener('click', displayBlock(p4, p4_active));
p5.addEventListener('click', displayBlock(p5, p5_active));
p6.addEventListener('click', displayBlock(p6, p6_active));
p7.addEventListener('click', displayBlock(p7, p7_active));