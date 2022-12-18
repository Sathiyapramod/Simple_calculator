// Function to display value on the screen

function dis(value){
    
    document.getElementById("result").value += value;
}

// function to perform operation

function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

// function to perform clear operation 
function clr(){
    document.getElementById("result").value = "";
}

//backspacing operation 

function backspace(){
    let screen = document.getElementById("result").value;
    document.getElementById("result").value = screen.substring(0, screen.length-1);
}

//Enabling Enter keyword to solve operations 

function pressedkey(event){
    let x = event.key;
    if (x === "Enter")
        solve();        
}
function onlyNumbers(event){
    let charcode = (event.which) ? event.which : event.key;
    if( charcode != 46  && charcode > 31 && (charcode < 48 || charcode < 57))
        return false;
    return true;
}






