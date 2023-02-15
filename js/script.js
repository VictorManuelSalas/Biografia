window.addEventListener("load", function () {
    setTimeout(() => {
        var load = document.getElementById("loader");
        load.style.display = "none";
    }, 1000);
});



var fecha = new Date();
var año = fecha.getFullYear();

copyright = document.getElementById("copyright");

var txt = "&#169;" + año + " Charlie Munger";
copyright.innerHTML = txt;

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY>10);
})