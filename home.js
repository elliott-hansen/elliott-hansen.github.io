
const track = document.getElementById("scrollTrack");

let amountScrolled = 0;


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('wheel', (event) => {
    if (amountScrolled <= 0 && amountScrolled > -81) {
        if (amountScrolled - event.deltaY / 102 >= 1) {
            return;
        }
        if (amountScrolled - event.deltaY / 102 === -81 ) {
            return;
        }
        amountScrolled -= (event.deltaY / 102) * 8;
        track.animate( { transform: 'translateY('+amountScrolled+'%)' }, {easing: 'ease-in-out',duration: 800, fill: 'forwards'} );

        for (const img of track.getElementsByClassName("Image")) {
            img.animate({ transform: 'translateY('+(-amountScrolled)+'%)' }, {easing: 'ease-in-out',duration: 800, fill: 'forwards'});
            // img.animate({ objectPosition: 'center '+(-amountScrolled)/3+"%"}, {easing: 'ease-in-out',duration: 800, fill: 'forwards'});  
        }
    }
});

