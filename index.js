function clickEvent(){
    let drumArray = document.querySelectorAll(".drum") 

    function handleClick(){
        let kickDrum = new Audio('/sounds/kick-bass.mp3')
        kickDrum.play();
    }

    for(i = 0; i < drumArray.length; i++){
        drumArray[i].addEventListener("click", handleClick)
    }
}

clickEvent();
