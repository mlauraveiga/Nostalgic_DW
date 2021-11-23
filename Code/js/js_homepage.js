/*HOMEPAGE*/
let ord =  document.getElementsByClassName("ordenar");
let i;

for(i = 0; i < ord.length; i++){
    ord[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let info = this.nextElementSibling;
        if(info.style.display === "block"){
            info.style.display = "none";
        } else {
            info.style.display = "block";
        }
    });
}