function escolha () {

    while (true) {
        var caminho = prompt("Ótimo, enquanto os humanos subestimam o conformismo nós o valorizamos.  Agora responda, você prefere cachorro ou gato?\n 1- Cachorro.\n 2- Gato.\nDigite um número.")

        if (caminho == 1) {
            alert ("Não temos paciência para historinhas do tipo Marley e Eu e nem Sempre ao Seu Lado. GAME OVER.")
            return location.href = "../index.html"
        }
        else if (caminho == 2) {
            return location.href = "./fase4mcr.win.html"
        }
        else {
            alert ("Digite uma opção válida!")
            caminho = prompt("Ótimo, enquanto os humanos subestimam o conformismo nós o valorizamos.  Agora responda, você prefere cachorro ou gato?\n 1- Cachorro.\n 2- Gato.\nDigite um número.")
        }
    }
}