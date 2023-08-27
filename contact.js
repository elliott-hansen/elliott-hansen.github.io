const mailImage = document.getElementById("mailImage");

var wheelDistance = function(evt) {
    // wheelDelta indicates how
    // Far the wheel is turned
    var w = evt.wheelDelta;
         
    // Returning normalized value
    return (w / 120);
}

document.addEventListener('wheel', (event) => {
    wd = wheelDistance(event);
    console.log(wd);

    mailImage.animate({transform: 'translateY('+wd*3+'%)'}, {easing: 'ease-in-out',duration: 500, fill: 'forwards'});
    // mailImage.animate({transform: rotateZ('90deg')}, {easing: 'ease-in-out',duration: 500, fill: 'forwards'});

    mailImage.animate({transform: 'translateY(0%)'}, {easing: 'ease-in-out',duration: 500, fill: 'forwards'});
})