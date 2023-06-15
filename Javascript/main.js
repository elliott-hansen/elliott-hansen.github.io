
function changeTitle(title) {
    document.getElementById("_title").innerHTML = title;
    document.getElementById("_period").style.fontSize = "30px";
    document.getElementById("_period").style.color = "#ff695e";
}

function alterTitle() {
    let defaultTitle = "Elliott H<span id='_period'>.</span>"
    if (screen.matchMedia('(max-width: 700px)')) {
        changeTitle("EH<span id='_period'>.</span>")
    }
    else {
        changeTitle(defaultTitle);
    }
}

window.addEventListener('resize', alterTitle);