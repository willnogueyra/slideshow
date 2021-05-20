let totalSlide = document.querySelectorAll('.slider--item').length; //quantidade de imagens
let atualSlide = 0; 

document.querySelector('.slider--width').style.width = `calc(100% * ${totalSlide})`; // total de width juntando todas imagens
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`; // centralizar os botãos de controle

function voltar() {
    atualSlide--;
    // verificação: se tiver na primeira imagem 0, pega quantidade(3 imagens) menos 1 valor de array
    if(atualSlide < 0) { 
        atualSlide = totalSlide - 1;
    }
    UpdateSlide();
}
function proximo() { 
    atualSlide++;
    // se tiver na ultima imagem 2, pega quantidade (3 imagens) e zera pra primeira com valor de array(0)
    if(atualSlide > (totalSlide - 1)) {
        atualSlide = 0;
    }
    UpdateSlide();
}

function UpdateSlide() { // efeito carrossel: pega quantidade width e coloca no margin-left
    let newMargin = (atualSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(proximo, 5000)