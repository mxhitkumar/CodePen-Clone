function run() {
    let htmlcode = document.getElementById("html-input").value;
    let csscode = document.getElementById("css-input").value;
    let jscode = document.getElementById("js-input").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
    output.contentWindow.eval(jscode);
}

var sidemenu = document.getElementById("side-menu");

function openmenu() {
    sidemenu.style.right = "75px";
}
function closemenu() {
    sidemenu.style.right = "-400px";
}