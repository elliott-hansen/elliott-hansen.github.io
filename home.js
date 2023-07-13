
const track = document.getElementById("scrollTrack");
const scrollArrow = document.getElementById("scrollArrow");
const bigImage = document.getElementById("bigImage");
const bottomBlock = document.getElementById("bottomBlock");
let amountScrolled = 0;
let firstScroll = false;
let bottomBlockVisible = false;

function reAlignPage() {
    console.log("aligning page")
    track.finish();
    console.log("page aligned")
}


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
    if (amountScrolled <= 0 && amountScrolled > -145) {
        if (amountScrolled - event.deltaY / 102 >= 1) {
            return;
        }
        if (amountScrolled - event.deltaY / 102 === -145 ) {
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

    if (amountScrolled === -144 && bottomBlockVisible === false) {
        bottomBlock.animate( {transform: 'translateY(0%)'}, {easing: 'ease-out', duration: 500, fill: 'forwards'});
        bottomBlockVisible = true;
    }
    else if (bottomBlockVisible === true && amountScrolled > -144){
        bottomBlock.animate( {transform: 'translateY(100%)'}, {easing: 'ease-out', duration: 500, fill: 'forwards'});
        bottomBlockVisible = false;
    }
});

