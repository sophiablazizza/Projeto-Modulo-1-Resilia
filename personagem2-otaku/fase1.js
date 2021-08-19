function escolha() {
    
    while (true) {
       var caminho = prompt ("Devemos confessar que não gostamos de anime, então OI EU SOU O GOKU não vai funcionar com a gente. Mesmo assim vamos te dar uma chance. O termo correto é biscoito ou bolacha?\n 1- Biscoito\n 2- Bolacha\nDigite um número.")

        if (caminho == 1) {
            alert ("É BOLACHAAAAAAAAAAAAAAA. Game over.")
            return location = ("/index.html")
        }
        else if (caminho == 2) {
            return location =("../personagem2-otaku/fase2.html")
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ("Devemos confessar que não gostamos de anime, então OI EU SOU O GOKU não vai funcionar com a gente. Mesmo assim vamos te dar uma chance. O termo correto é biscoito ou bolacha?\n 1- Biscoito\n 2- Bolacha\nDigite um número.")
        }
    }
}