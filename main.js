const html = document.querySelector('html');
console.log(localStorage.getItem('colorscheme'));

try {
    var color_scheme = localStorage.getItem("colorscheme");
    if (color_scheme == 'darkmode') {
        html.dataset.theme = 'darkmode'
    }
    else {
        html.dataset.theme = 'lightmode'
    }
    $("document").ready(() => {
        $("#ThemeText").html(html.dataset.theme);
    })
}
catch {
    console.log('fail');
}

function darkMode() {
    localStorage.setItem("colorscheme", 'darkmode');
    html.dataset.theme = 'darkmode'
    color_scheme = 'dark';
    console.log(localStorage.getItem("colorscheme"));
}

function lightMode() {
    localStorage.setItem("colorscheme", 'lightmode');
    html.dataset.theme = 'lightmode'
    color_scheme = 'light';
    console.log(localStorage.getItem("colorscheme"));
}

function toggleColors() {
    if(color_scheme == 'dark') {
        lightMode();
    }
    else {
        darkMode();
    }
    $("#ThemeText").html(html.dataset.theme);
}