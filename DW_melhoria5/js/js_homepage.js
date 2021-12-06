/*HOMEPAGE*/
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000)

/*ordenar contos*/
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
