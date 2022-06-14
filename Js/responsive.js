 var boton=document.querySelector("#boton-menu")
 
function desplegarmenumovil() {

    document.querySelector(".nav-ul").classList.toggle("visible");
    

    
}

boton.addEventListener("click", desplegarmenumovil);


 
var desplegarDC=document.querySelector(".boton-submenu1");
var subliDC=document.querySelector(".sub-li1");

var desplegarMarvel=document.querySelector(".boton-submenu2")
var subliMarvel=document.querySelector(".sub-li2")

function submenuDC() {
    subliDC.classList.toggle("visible");
    
}

desplegarDC.addEventListener("click", submenuDC);

/* Funcion para desplegar el submenu de personajes pinchando en el boton*/ 


function submenuMarvel() {
    subliMarvel.classList.toggle("visible");
    
}

desplegarMarvel.addEventListener("click", submenuMarvel);














   

















 














