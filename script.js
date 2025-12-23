window.onload = function() {
    console.log("portafolio cargado correctamente")
    alert("¡Bienvenido a mi portafolio profesional!");

}

const boton = document.getElementById('btn-interactuar');
const parrafo = document.getElementById('bio-texto');
const infoExtra = document.getElementById('info-extra');

boton.addEventListener('click', () => {
    bioTexto.textContent = "!Gracias por interesarte en mi perfin profesional¡";
    
    if (infoExtra.style.display === 'none') {
        infoExtra.style.display = 'block';
        boton.innerText = "mostrar menos";
        btnInteractuar.style.backgroundColor = "#ce6119";
    }else {
        infoExtra.style.display = 'none';
        boton.innerText = "¡Haz clic para conocerme más!";
        btnInteractuar.style.backgroundColor = "#2980b9";
    }
});

