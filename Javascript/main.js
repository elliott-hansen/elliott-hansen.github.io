

function resizeTitle(newTitle) {
    var query = window.matchMedia("(max-width: 870px)");
    if(query.matches) {
        document.getElementById("_titleName").innerHTML = "E";
    }
    else {
        document.getElementById("_titleName").innerHTML = defaultTitle;
    }
}
const resizeOps = () => {
document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

function changeToMobile() {
    var query = window.matchMedia("(max-width: 870px) or ((pointer:coarse) or (pointer:none))");
    if(query.matches) {
        document.getElementById("_navbar").style.display = "none";
        document.getElementById("_mobileNavBlock").style.display = "flex";
    }
    else {
        document.getElementById("_navbar").style.display = "flex"
        document.getElementById("_mobileNavBlock").style.display = "none";
    }
}

function displaySlideOut(){
    console.log("!!")
    // document.getElementById("_slideout").style.display = "flex"
    document.getElementById("_slideout").style.opacity = "100%";
}


resizeOps();
changeToMobile();
let defaultTitle = "Elliott H"
resizeTitle("E");
window.addEventListener('resize', resizeTitle);
window.addEventListener("resize", changeToMobile);
window.addEventListener("load", changeToMobile);
window.addEventListener("load", resizeOps);
document.getElementById("_mobileNavBlock").addEventListener("mouseover", displaySlideOut);