function clickEvent(){
    let drumArray = document.querySelectorAll(".drum") 

    function handleClick(){
        alert("I have been clicked")
    }

    for(i = 0; i < drumArray.length; i++){
        drumArray[i].addEventListener("click", handleClick)
    }
}

clickEvent();
