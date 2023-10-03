const player1 = "X"
const player2 = "O"

var playTime = player1
var gameOver = false

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
    if (gameOver) {return;}

    if(playTime == player1){

        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "images/X.png");
        
    }else{

        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "images/circulo.png");

    }

}


function inicializarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function(){
            if (gameOver) {return;}

            if(this.getElementsByTagName("img").length == 0){
                if (playTime == player1){
                    this.innerHTML = "<img src='images/X.png' class='imagemJogada'>"
                    this.setAttribute("jogada", player1)
                    playTime = player2;
                }else{
                    this.innerHTML = "<img src='images/circulo.png' class='imagemJogada'>"
                    this.setAttribute("jogada", player2)
                    playTime = player1;
                }
                atualizaMostrador();
                
                verificarVencedor();

            }
        }
        );
        
    }

}

    // function verificarVencedor(){
    //     var a1 = document.getElementById("a1").getAttribute("jogada");
    //     var a2 = document.getElementById("a1").getAttribute("jogada");
    //     var a3 = document.getElementById("a1").getAttribute("jogada");

    //     var b1 = document.getElementById("b1").getAttribute("jogada");
    //     var b2 = document.getElementById("b2").getAttribute("jogada");
    //     var b3 = document.getElementById("b3").getAttribute("jogada");

    //     var c1 = document.getElementById("c1").getAttribute("jogada");
    //     var c2 = document.getElementById("c2").getAttribute("jogada");
    //     var c3 = document.getElementById("c3").getAttribute("jogada");


    //     var vencedor = "";

    //     if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2  && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "") ){
    //         vencedor = a1;
    //     }else if((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == c1 && b2 == a3 && b2 != "")){
    //         vencedor = b2;
    //         // console.log("teste.");
    //     }else if((c3 == c1 && c3 == c2 && c3 != "") || (c3 == b3 && c3 == a3 && c3 != "") ){
    //         vencedor = c3;
    //     }


    //     if (vencedor != ""){
    //         gameOver = true;
    //         alert("O ganhador foi o: '" + vencedor + "'");
    //     }
    // }


    async function verificarVencedor() {
        var espacos = document.getElementsByClassName('espaco');
        var espacoId = [];
        var vencedor = "";
        var empate = 0;
        for (var i = 0; i < espacos.length; i++) {
         espacoId[i] = espacos[i].getAttribute("jogada");
        }
        empate = espacoId.indexOf("");
       
        if((espacoId[0] == espacoId[1]) && (espacoId[0] == espacoId[2]) || (espacoId[0] == espacoId[3]) && (espacoId[0] == espacoId[6]) || (espacoId[0] == espacoId[4]) && (espacoId[0] == espacoId[8])){
         vencedor = espacoId[0];
       
       
        }
        else if((espacoId[4] == espacoId[1]) && (espacoId[4] == espacoId[7]) || (espacoId[4] == espacoId[3]) && (espacoId[4] == espacoId[5]) || (espacoId[4] == espacoId[2]) && (espacoId[4] == espacoId[6])){
         vencedor = espacoId[4]; 
       
       
        }
        else if((espacoId[8] == espacoId[5]) && (espacoId[8] == espacoId[2]) || (espacoId[8] == espacoId[7]) && (espacoId[8] == espacoId[6])){
         vencedor = espacoId[8];
       
        }
        else if (empate == -1) {
         gameOver = true;
       
         await sleep(50);
       
         alert("Empate !!");
       
         var valorStyle = "color: white; background: blue;";
         var btnRecomecar = document.getElementById('btnRecomecar');
         btnRecomecar.removeAttribute("disabled");
         btnRecomecar.setAttribute("style", valorStyle);
       
         btnRecomecar.addEventListener('click', function () {
          window.location.reload();
         });
        }
        if(vencedor != ""){
         gameOver = true;
       
         await sleep(50);
       
         alert("O vencedor é: " + vencedor);
       
         var valorStyle = "color: white; background: blue;";
         var btnRecomecar = document.getElementById('btnRecomecar');
         btnRecomecar.removeAttribute("disabled");
         btnRecomecar.setAttribute("style", valorStyle);
       
         btnRecomecar.addEventListener('click', function () {
          window.location.reload();
         });
        }
       }
       
       function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
       }
