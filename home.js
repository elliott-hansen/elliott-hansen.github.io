
const track = document.getElementById("scrollTrack");
const scrollArrow = document.getElementById("scrollArrow");
const bigImage = document.getElementById("bigImage");
const bottomBlock = document.getElementById("bottomBlock");
const socialLink1 = document.getElementById("social1");
const socialLink2 = document.getElementById("social2");
const socialLink3 = document.getElementById("social3");
const designImage = document.getElementById("designImage");
const designText = document.getElementById("designText");
const bottomScrollBar = document.getElementById("bottomScrollBar");
const loadFadeIn = document.getElementById("loadFadeIn");
var flavorText = document.getElementsByClassName("flavorText");

let amountScrolled = 0;
let firstScroll = false;
let bottomBlockVisible = false;
let sideScroll = 100;

// function reAlignPage() {
//     console.log("aligning page")
//     track.finish();
//     console.log("page aligned")
// }

var wheelDistance = function(evt) {
    // wheelDelta indicates how
    // Far the wheel is turned
    var w = evt.wheelDelta;
         
    // Returning normalized value
    return (w / 120);
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
    loadFadeIn.animate ( {opacity: '100%'}, {duration: 400, fill: 'forwards'} );
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
    wd = -wheelDistance(event)
    if (amountScrolled > 0) {
        amountScrolled = 0;
        track.animate( { transform: 'translateY(0%)' }, {easing: 'ease-in-out',duration: 500, fill: 'forwards'} );
        return;
    }if (amountScrolled < -179) {
        amountScrolled = -178;
        track.animate( { transform: 'translateY(-178%)' }, {easing: 'ease-in-out',duration: 500, fill: 'forwards'} );
        return;
    }
    if (amountScrolled <= 0 && amountScrolled > -179) {
        if (amountScrolled - wd >= 0) {
            return;
        }
        if (amountScrolled - wd > -178 ) {
            amountScrolled -= wd * 8;
            if(!firstScroll) {
                scrollArrow.animate( {
                    opacity: '0%'
                } , {easing: 'ease-out', duration: 400, fill: 'forwards'});
                firstScroll = true;
            }
            if (amountScrolled - wd > -225 ) {
                track.animate( { transform: 'translateY('+amountScrolled*0.5+'%)' }, {easing: 'ease-in-out',duration: 500, fill: 'forwards'} );
            }
    
            for (const img of track.getElementsByClassName("Image")) {
                img.animate({ transform: 'translateY('+(-amountScrolled)*0.55+'%)' }, {easing: 'ease-in-out',duration: 500, fill: 'forwards'});
                // img.animate({ objectPosition: 'center '+(-amountScrolled)/3+"%"}, {easing: 'ease-in-out',duration: 800, fill: 'forwards'});
                if(amountScrolled > -85) {
                    designImage.animate({ opacity: -amountScrolled*1.15+'%'}, {easing: 'ease-in-out',duration: 1600, fill: 'forwards'});
                    designImage.animate({ transform: 'translateY('+(-amountScrolled-85)+'%)'}, {easing: 'ease-in-out',duration: 900, fill: 'forwards'});
                }
                if(amountScrolled < -85) {
                    for(var i = 0; i < flavorText.length; i++) {
                        flavorText[i].animate({ color: '#397048'}, {easing: 'ease-in-out',duration: 1200, fill: 'forwards'});
                    }
                }
                else {
                    for(var i = 0; i < flavorText.length; i++) {
                        flavorText[i].animate({ color: 'black'}, {easing: 'ease-in-out',duration: 1200, fill: 'forwards'});
                    }
                }
            }
    
            for (const img of bigImage.getElementsByClassName("StaticImage")) {
                img.animate({ objectPosition: 'center '+(-amountScrolled)/3.3+"%"}, {easing: 'ease-out',duration: 500, fill: 'forwards'});  
            }
        }

    
        }
        else if (amountScrolled <= -178 && amountScrolled > -182) {
            if (amountScrolled - wd * 8 <= -183) {
                return
            }
            amountScrolled -= wd * 8;
            // sideScroll -= wd * 20;
            // if (sideScroll > 100) {
            //     sideScroll = 100;
            // }
            // console.log("sidescroll:", sideScroll);
            // bottomScrollBar.animate( { transform: 'translateX('+sideScroll+'%)' }, {easing: 'ease-in-out',duration: 1000, fill: 'forwards'} );
        }

        if (amountScrolled <= -178 && bottomBlockVisible === false) {
            bottomBlock.animate( {transform: 'translateY(0%)'}, {easing: 'ease-out', duration: 500, fill: 'forwards'});
            socialLink1.animate( {filter: 'brightness(100%)'}, {easing: 'ease-out', duration: 500, fill: 'forwards'});
            bottomBlockVisible = true;
        }
        else if (bottomBlockVisible === true && amountScrolled > -178){
            bottomBlock.animate( {transform: 'translateY(100%)'}, {easing: 'ease-out', duration: 500, fill: 'forwards'});
            bottomBlockVisible = false;
        }
});

