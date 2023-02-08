window.addEventListener('scroll', function(){
    let animacion = document.getElementById('flecha');
    let animado = this.document.getElementById('imagen-flecha');
    let posicionFlecha = animacion.getBoundingClientRect().top - 500;
    console.log(posicionFlecha);
    let innerHeight = this.window.innerHeight / 3;
    if(posicionFlecha < innerHeight){
        animado.style.animation = 'flecha 2s running';
        animado.style.animationFillMode = 'forwards';
    }
});