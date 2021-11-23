/*LANDING PAGE*/
let counter = document.querySelector('p');
let count = 1;

setIntervale(()=> {
    counter.innerText = count;
    count ++
}, 1000)
