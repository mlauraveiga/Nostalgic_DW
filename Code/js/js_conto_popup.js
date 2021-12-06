function homepage(){
    document.querySelector('.exit-intent-popup').classList.add('visible');
    var link = document.getElementById("link");
    link.setAttribute("href", "homepage.html");
}

function exit(){
    document.querySelector('.exit-intent-popup').classList.remove('visible');
}

function aboutus(){
    document.querySelector('.exit-intent-popup').classList.add('visible');
    var link = document.getElementById("link");
    link.setAttribute("href", "aboutus.html");
}