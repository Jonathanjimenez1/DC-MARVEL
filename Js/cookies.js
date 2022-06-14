/*Funcion enseñar mensajews cookies*/ 

var cookies=document.querySelector("#cookies");
var boton=document.querySelector(".botones-cookies");

boton.addEventListener("click", function () {
    cookies.style.display="none";
    
})

if( !sessionStorage.getItem('ingreso') ){

    document.getElementById('cookies').style.display= 'block';
    // estableces el localstorage en 1 para que no se vuelva a cumplir la condicion
    sessionStorage.setItem('ingreso',1); 

} else {
    document.getElementById('cookies').style.display= 'none';
}

