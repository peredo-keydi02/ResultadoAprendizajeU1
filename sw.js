self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
    });

    self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
    });

    self.addEventListener('fetch', function(event) {
    console.log('Interceptando petición a:', event.request.url);
    });

const btn_abrir = document.getElementById("btn-abirModal");
const cerrar = document.querySelectorAll(".cerrar");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

btn_abrir.addEventListener("click", ()=>{
    overlay.classList.add("ver");
    modal.classList.add("vermodal");
});

cerrar.forEach(btn_cerrar =>{
    btn_cerrar.addEventListener("click", ()=>{
        overlay.classList.remove("ver");
        modal.classList.remove("vermodal");
    });
});