let scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener("click", function()  {
    window.scrollTo({ top: 0, behavior: "smooth" });
})
let Btn1 = document.getElementById("btn1");
let body = document.getElementById("body");
let light = 0; 
let img = document.getElementById("img");
Btn1.addEventListener("click", function()  {
    if (light == 1) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        img.src = "https://img.icons8.com/?size=100&id=25031&format=png&color=000000";
        light = 0;
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        img.src = "https://img.icons8.com/?size=100&id=648&format=png&color=000000";
        light = 1;
    }

})
let Btn2 = document.getElementsById("collectionBtn");
let show = document.getElementsById("show");
let display = 0;