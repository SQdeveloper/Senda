const header = document.querySelector("header");
const span   = document.querySelector("header span");
const img    = document.querySelector("header .toggle");

window.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        header.classList.add("active");
        span.style.color = "black";
        img.style.filter = "none";
    }
    else {
        header.classList.remove("active");
        span.style.color = "white";
        img.style.filter = "invert(100%)";
    }
});