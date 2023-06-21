function showTopbar() {
    var scrollpoint = window.scrollY;
    topbar = document.getElementById("_topbar")
    if (scrollpoint > 891 ) {
        topbar.style.justifyContent = "flex-start";
    }
    if (scrollpoint > 1926 ) {
        topbar.style.justifyContent = "flex-end";
    }
    if (scrollpoint > 2901) {
        topbar.style.justifyContent = "flex-start";
    }
}

showTopbar();
window.addEventListener("scroll", showTopbar);