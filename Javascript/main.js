

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


resizeOps();
let defaultTitle = "Elliott H"
resizeTitle("E");
window.addEventListener('resize', resizeTitle)
window.addEventListener("load", resizeOps);