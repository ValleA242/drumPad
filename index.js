function clickEvent(){
    let drumArray = document.querySelectorAll(".drum") 

    function kickDrumTrigger(){
        let kickDrum = new Audio('/sounds/kick-bass.mp3')
        kickDrum.play();
    }

    function snareDrumTrigger(){
        let snareDrum = new Audio('/sounds/snare.mp3')
        snareDrum.play();
    }

    function crashTrigger(){
        let crash = new Audio('/sounds/crash.mp3')
        crash.play();
    }

    function tomOneTrigger(){
        let tom1 = new Audio('/sounds/tom-1.mp3')
        tom1.play();
    }

    function tomTwoTrigger(){
        let tom2 = new Audio('/sounds/tom-2.mp3')
        tom2.play();
    }

    function tomThreeTrigger(){
        let tom3 = new Audio('/sounds/tom-3.mp3')
        tom3.play();
    }

    function tomFourTrigger(){
        let tom4 = new Audio('/sounds/tom-4.mp3')
        tom4.play();
    }


 for(i = 0; i < drumArray.length; i++){
    if(drumArray [i] === drumArray[0]){    
            drumArray[0].addEventListener("click", kickDrumTrigger);
        } else if(drumArray[i] === drumArray[1]){
            drumArray[1].addEventListener("click", snareDrumTrigger);
        } else if(drumArray[i] === drumArray[2]){
            drumArray[2].addEventListener("click", crashTrigger);
        } else if(drumArray[i] === drumArray [3]){
            drumArray[3].addEventListener("click", tomOneTrigger);
        } else if(drumArray[i] === drumArray[4]){
            drumArray[4].addEventListener("click", tomTwoTrigger);
        } else if(drumArray[i] === drumArray[5]){
            drumArray[5].addEventListener("click", tomThreeTrigger);
        } else {
            drumArray[6].addEventListener("click", tomFourTrigger);
        }
    
    }

}

clickEvent();
