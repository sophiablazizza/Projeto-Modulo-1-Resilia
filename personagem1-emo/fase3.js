function escolha () {

    while (true) {
        var caminho = prompt("Demonstrar vulnerabilidade para outras pessoas é um sinal de coragem. Agora uma pergunta muito importante. Você coloca o feijão cima ou por baixo do arroz?\n 1- Por cima\n 2- Por baixo\nDigite um número.")

        if (caminho == 1) {
            return location.href = "./win.fase3.fresno.html"
        }
        else if (caminho == 2) {
            alert ("O FEIJÃO É POR CIMAAAAAAAAAA. Game over.")
            return location.href = "./index.html"
            
        }
        else {
            alert ("Digite uma opção válida!")
            caminho = prompt("Demonstrar vulnerabilidade para outras pessoas é um sinal de coragem. Agora uma pergunta muito importante. Você coloca o feijão cima ou por baixo do arroz?\n 1- Por cima\n 2- Por baixo\nDigite um número.")
        }
    }
}