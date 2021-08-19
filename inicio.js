var modal = document.getElementById("meu-modal");

var botao = document.getElementById("meu-botao-introducao");

var span = document.getElementsByClassName("fechar")[0];

botao.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function escolha() {
    
    while(true) {
        var caminho = prompt ('Escolha um personagem:\n 1- o Emo\n 2- o Otaku\n 3- o Tiktoker \nDigite o número correspondente.');

        if (caminho == 1) {
            return location = ("../personagem1-emo/fase1.html")
        }
        else if (caminho == 2) {
            return location = ("../personagem2-otaku/fase1.html")
        }
        else if (caminho == 3) {
            return location = ("../personagem3-tiktoker/fase1.html")
        }
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ('Escolha um personagem:\n 1- o Emo\n 2- o Otaku\n 3- o Tiktoker \nDigite o número correspondente.');
        }  
    }
}
