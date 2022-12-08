for(i = 0; i < drumArray.length; i++){
    
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     
    let buttonInnerHTML = this.innerHTML;
     
    switch (buttonInnerHTML) {
        case "w":
           let kickDrum = new Audio('/sounds/kick-bass.mp3');
           kickDrum.play(); 
           break;
         
        case "a":
            let snareDrum = new Audio('/sounds/snare.mp3');
            snareDrum.play();
            break;
             
        case "s":
            let crash = new Audio('/sounds/crash.mp3');
            crash.play();
            break;
         
        case "d":
            let tomOne = new Audio('/sounds/tom-1.mp3');
            tomOne.play();
            break;
          
        case "j":
            let tomTwo = new Audio('/sounds/tom-2.mp3');
            tomTwo.play();
            break;
             
        case "k":
            let tomThree = new Audio('/sounds/tom-3.mp3');
            tomThree.play();
            break;
             
        case "l":
            let tomFour = new Audio('/sounds/tom-4.mp3'); 
            tomFour.play();
            break;
     }          
     })
    }



