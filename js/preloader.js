let loader = document.getElementById('preloader');
document.body.style.overflowY = "hidden";
window.addEventListener("load", preloader)

function preloader(){
    loader.classList.add("preloader__vanish");
    document.body.style.overflowY = "scroll";
}