"use strict"

const lampada = document.getElementById("lampada")
let idInterval


function lampadaInteira(){
    return lampada.src.includes ("ligada")
//  return lampada.src.includes ("ligada")
    /* includes ("ligada") = verifica sobre a variavel lampada 
    no nome do arquivo "src" se existe a palavra "ligada" e se existir, o valor é true e se nao existir é false */
}

function ligarLampada(){
    if(lampadaInteira()){
    // o if faz a seguinte instrução: se a funcao lampadaInteira estiver ligada, vai retornar true e executar o if normal
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada(){
    if(lampadaInteira()){
        lampada.src = "img/desligada.jpg"
    }
}

function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}

//setInterval = (funcao, intervalo(milisegundos)) nao para nunca
//setTimeout = (funcao, intervalo) - para de acordo com o limite do while
//clearInternal = (idInterval) = faz parar o setInterval ou o setTimeout

function piscarSetTimeOut(){
    var intervalo=0
    var contador=0
    
    while(contador<10){
        intervalo += 300; setTimeout(desligarLampada, intervalo);
        intervalo += 300; setTimeout(ligarLampada, intervalo);
        contador++;
    }
}

function piscarSetInterval(){
  setInterval(ligarLampada, 500)
  setInterval(desligarLampada, 1000)
}

function lampadaDesligada(){
    return lampada.src.includes ("desligada")
}

function trocarImagem(){
    if(lampadaDesligada()){
        ligarLampada()
    }
    else{
        desligarLampada()
    }
}

function pararPiscar(){
    clearInterval(idInterval)
}
function piscarLampada() {

    const piscar = document.getElementById("piscar")
    if (piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem, 1000)
        piscar.textContent = "Parar"
    } else {
        pararPiscar()
        piscar.textContent = "Piscar"
    }
    
}


//eventos                              
document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("piscar")
    .addEventListener("click", piscarLampada)


//Passar mouse sobre a lampada e alterar o evento

lampada.addEventListener("mouseover", ligarLampada)
//mouseover = quando passar o mouse sobre a imagem
lampada.addEventListener("mouseout", desligarLampada)
//mouseout = quando tirar o mouse sobre a imagem
lampada.addEventListener("dblclick", quebrarLampada)
//dblclick = quando der dois cliques sobre algum objeto.