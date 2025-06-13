let gomb = document.getElementById("barmi");
let message = document.getElementById("valami");

function showMessage(){
    message.textContent = "Ranyomtam a gombra";
}

gomb.addEventListener('click', showMessage);