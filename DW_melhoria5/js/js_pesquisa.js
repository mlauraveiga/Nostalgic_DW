function openPage(){
    var x = document.getElementById("search").value;

    if (x === "passaro dourado"){
        window.open("conto_passarodourado.html");
    }

    if (x === "a princesa e o sapo"){
        window.open("pesquisa_notfound.html");
    }
}