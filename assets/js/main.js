function scrollhome() {
    window.location.href = '#'

} 

scrollhome();




//Menu nav

let ul = document.querySelector('nav ul');
let menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}


document.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('list-nav')) {
        ul.classList.remove('open')
    }
})


var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// Calcular progresso / conhecimento;

const progressHTML = document.querySelector("#progress-html");
const progressCss = document.querySelector("#progress-css");
const progressJavascript = document.querySelector("#progress-javascript");

const calculaProgress = (nomeProgress, porcentagem) => nomeProgress.style.width = `${porcentagem}%`


calculaProgress(progressHTML, 50)
calculaProgress(progressCss, 40)
calculaProgress(progressJavascript, 50)

