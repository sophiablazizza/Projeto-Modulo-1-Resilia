function escolha() {

    while (true) {
       var caminho = prompt ("Ótimas escolhas até então, no entanto você ainda não está a salvo. Escolha entre Senhor dos Anéis e Harry Potter.\n 1- Senhor dos Anéis\n 2- Harry Potter\nDigite um número.")

        if (caminho == 1) {
            alert ("Você passará a eternidade no limbo e ainda assim não será o suficente para conseguir maratonar todos os filmes. Game over.")
            return location.href = "../index.html"
        }
        else if (caminho == 2) {
            return location.href = "./fase4.html"
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ("Ótimas escolhas até então, no entanto você ainda não está a salvo. Escolha entre Senhor dos Anéis e Harry Potter.\n 1- Senhor dos Anéis\n 2- Harry Potter\nDigite um número.")
        }
    }
}