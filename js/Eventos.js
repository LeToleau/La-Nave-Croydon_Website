var nave = document.getElementById('logo');
var titulo = document.querySelector('.mainTitle');

var fotos = document.querySelectorAll('.fotosGrid__img');

window.addEventListener('click' , function(e) {
    if(e.target == nave) {
    nave.style = 'display:none;'
    titulo.classList.add("animate__animated")
    titulo.classList.add("animate__fadeInOut");
    }
});


window.addEventListener('click', function(e) {

    if(e.target != nave) {
        nave.style = 'display:block';
        titulo.classList.remove("animate__animated");
        titulo.classList.remove("animate__fadeInUp");
    }
});

window.addEventListener('click', function(e) {
    
    for(i=0; i <= 8; i++){
        if(e.target == fotos[i]) {
            fotos[i].classList.toggle("fotosGrid__img--scale")
        }
    }
})
