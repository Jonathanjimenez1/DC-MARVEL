/*  Sonidos botones marvel */

function soundbatman() {
 
    var batman= document.querySelector("#batman")
    batman.play();
    
    
     
 }
 
 document.querySelector("#batman-sound").addEventListener("click", soundbatman);
 
 function soundsuperman() {
  
     var superman= document.querySelector("#superman")
     superman.play();
     
     
      
  }
 
  
 document.querySelector("#superman-sound").addEventListener("click", soundsuperman);
 
 
 function soundjoker() {
  
     var joker= document.querySelector("#joker")
     joker.play();
     
     
      
  }
 
  
 document.querySelector("#joker-sound").addEventListener("click", soundjoker);