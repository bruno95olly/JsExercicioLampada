"use strict"

let
const lampada = document.getElementById("lampada")

function lampadaInteira(){
    return lampada.src.includes ("ligada")
    /* includes ("ligada") = verifica sobre a variavel lampada 
    no nome do arquivo "src" existe a palavra "ligada" */
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

function piscar(){
    var intervalo=0
    var contador=0
    while(contador<10){
        //setInterval = (funcao, intervalo(milisegundos)) nao para nunca
        //setTimeout = (funcao, intervalo) - para de acordo com o limite do while
        //clearInternal = (idInterval) = faz parar o setInterval ou o setTimeout
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/desligada.jpg';", intervalo);
        intervalo += 300;
        setTimeout("document.getElementById('lampada').src='img/ligada.jpg';", intervalo);
        contador++;
    }
}
function piscar2(){
    const botaoPiscar = document.getElementById("piscar")
  setInterval(ligarLampada, 500)
  setInterval(desligarLampada, 1000)
}
functionParar

                                //eventos
                              
document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("piscar")
    .addEventListener("click", piscar2)


                //Passar mouse sobre a lampada e alterar o evento

// lampada.addEventListener("mouseout", desligarLampada)
//mouseout = quando tirar o mouse sobre a imagem

// lampada.addEventListener("mouseover", ligarLampada)
//mouseover = quando passar o mouse sobre a imagem


document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)
//dblclick = quando der dois cliques sobre algum objeto.