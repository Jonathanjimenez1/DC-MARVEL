var formulario=document.querySelector("#formulario");
var gracias=document.querySelector("#gracias")
var boton= document.querySelector("#botonform")
  
if(sessionStorage.getItem("formulario")){
    formulario.style.display = "none";
    gracias.style.display="block";
    
}else{
    function hide(){
        sessionStorage.setItem("formulario", true);
        formulario.style.display = "none";
        gracias.style.display="block";
    }
}



