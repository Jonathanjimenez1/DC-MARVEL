var thor= document.getElementById("img-thor");
var rayo= document.getElementById("rayo");

var loki=document.getElementById("loki");
var loki2=document.getElementById("loki2");


var logoiroman=document.getElementById("logo-iroman");
var iroman=document.getElementById("iroman")  

var thanos=document.getElementById("thanos");


function thoranimacion() {

     var scrolltop= document.documentElement.scrollTop;
  
    thor.style.transform= 'translateX('+ scrolltop * + 0.2 +  'px)';
     rayo.style.transform= 'translateX('+ scrolltop * -0.2 +  'px)';
  

    
    
}

window.addEventListener("scroll" , thoranimacion)

/*thor*/ 


function lokianimacion() {

    var scrolltop= document.documentElement.scrollTop;
    
    
    loki.style.transform= 'rotatey('+ scrolltop * + 0.5 + 'deg)';
   

   
    
}

window.addEventListener("scroll", lokianimacion);

/*loki*/


function iromananimacion() {

    var scrolltop= document.documentElement.scrollTop;
 
   logoiroman.style.transform= 'translateX('+ scrolltop * + 0.1 +  'px)';
    iroman.style.transform= 'translateX('+ scrolltop * -0.1 +  'px)'; 
  

   
   
}

window.addEventListener("scroll" , iromananimacion);
 /*Ironman*/ 


function thanosanimacion() {

    var scrolltop= document.documentElement.scrollTop;
    console.log(scrolltop);
 
    if (scrolltop < 1680) {
        thanos.style.animationName="thanos-key"
        thanos.style.animationDuration="5s"
        thanos.style.animationIterationCount="infinite"
        
    } 
}


window.addEventListener("scroll" , thanosanimacion);

/*thanos*/









 