let gomb = document.getElementById("barmi");
let message = document.getElementById("valami");
let szovegdoboz = document.getElementsByClassName("textbox")[0];

function showMessage(){
    let input = szovegdoboz.value;
    message.textContent = "Szia " + input;
}

function deleteMessage(){
    szovegdoboz.value = "";
    message.textContent = "";
}




gomb.addEventListener('click', deleteMessage );
szovegdoboz.addEventListener('keyup', showMessage);