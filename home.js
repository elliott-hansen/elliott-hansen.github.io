
const track = document.getElementById("scrollTrack");
const scrollArrow = document.getElementById("scrollArrow");
const bigImage = document.getElementById("bigImage");
let amountScrolled = 0;
let firstScroll = false;


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
    if (amountScrolled <= 0 && amountScrolled > -161) {
        if (amountScrolled - event.deltaY / 102 >= 1) {
            return;
        }
        if (amountScrolled - event.deltaY / 102 === -161 ) {
            return;
        }
        if(!firstScroll) {
            scrollArrow.animate( {
                opacity: '0%'
            } , {easing: 'ease-out', duration: 400, fill: 'forwards'});
            firstScroll = true;
        }
        amountScrolled -= (event.deltaY / 102) * 8;
        console.log(amountScrolled);
        track.animate( { transform: 'translateY('+amountScrolled*0.6+'%)' }, {easing: 'ease-in-out',duration: 800, fill: 'forwards'} );

        for (const img of track.getElementsByClassName("Image")) {
            img.animate({ transform: 'translateY('+(-amountScrolled)+'%)' }, {easing: 'ease-in-out',duration: 800, fill: 'forwards'});
            // img.animate({ objectPosition: 'center '+(-amountScrolled)/3+"%"}, {easing: 'ease-in-out',duration: 800, fill: 'forwards'});  
        }

        for (const img of bigImage.getElementsByClassName("StaticImage")) {
            img.animate({ objectPosition: 'center '+(-amountScrolled)/3.3+"%"}, {easing: 'ease-out',duration: 800, fill: 'forwards'});  
        }
    }
});

