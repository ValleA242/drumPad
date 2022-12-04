function clickEvent(){
    let buttonArray = document.querySelectorAll("button") 
    
    function handleClick(){
        alert("I have been clicked")
    }

    for(i = 0; i < buttonArray.length; i++){
        buttonArray[i].addEventListener("click", handleClick) 
    }
}

clickEvent();
