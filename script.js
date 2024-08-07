const primerBoton = document.querySelector(".icon-minus-first");
const primeraRespuesta = document.querySelector(".respuesta-acordeon");


const segundoBoton= document.querySelector(".icon-plus-second");
const segundaRespuesta = primeraRespuesta.nextSibling.nextSibling;

const tercerBoton = document.querySelector(".icon-plus-third");
const terceraRespuesta = primeraRespuesta.nextSibling.nextSibling.nextSibling.nextSibling;

const cuartoBoton = document.querySelector(".icon-plus-four");
const cuartaRespuesta = primeraRespuesta.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
console.log(cuartaRespuesta);

primerBoton.addEventListener("click" , toogle );
segundoBoton.addEventListener("click" , toogleDos);
tercerBoton.addEventListener("click" , toogleTres);
cuartoBoton.addEventListener("click" , toogleCuarto);

function toogle(){
    if(primeraRespuesta.classList.contains("respuesta-acordeon")){
        primeraRespuesta.classList.remove("respuesta-acordeon");
        primeraRespuesta.classList.add("desaparecer");
        primerBoton.src = "./assets/images/icon-plus.svg";
    }else{
        primeraRespuesta.classList.add("respuesta-acordeon");
        primeraRespuesta.classList.remove("desaparecer");
        primerBoton.src = "./assets/images/icon-minus.svg";

    }
}

function toogleDos(){
    if(segundaRespuesta.classList.contains("desaparecer")){
        segundaRespuesta.classList.remove("desaparecer");
        segundaRespuesta.classList.add("respuesta-acordeon");
        segundoBoton.src = "./assets/images/icon-minus.svg";
    }else{
        segundaRespuesta.classList.add("desaparecer");
        segundaRespuesta.classList.remove("respuesta-acordeon");
        segundoBoton.src = "./assets/images/icon-plus.svg";
        
    }
}


function toogleTres(){
    if(terceraRespuesta.classList.contains("desaparecer")){
        terceraRespuesta.classList.remove("desaparecer");
        terceraRespuesta.classList.add("respuesta-acordeon");
        tercerBoton.src = "./assets/images/icon-minus.svg";
    }else{
        terceraRespuesta.classList.add("desaparecer");
        terceraRespuesta.classList.remove("respuesta-acordeon");
        tercerBoton.src = "./assets/images/icon-plus.svg";
    }
}

function toogleCuarto(){
    if(cuartaRespuesta.classList.contains("desaparecer")){
        cuartaRespuesta.classList.remove("desaparecer");
        cuartaRespuesta.classList.add("respuesta-acordeon");
        cuartoBoton.src = "./assets/images/icon-minus.svg";
    }else{
        cuartaRespuesta.classList.add("desaparecer");
        cuartaRespuesta.classList.remove("respuesta-acordeon");
        cuartoBoton.src = "./assets/images/icon-plus.svg";
    }
}