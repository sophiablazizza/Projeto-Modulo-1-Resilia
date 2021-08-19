function escolha() {
    
    while (true) {
       var caminho = prompt ("Já que você se considera um influencer digital, acredita ser capaz de nos influenciar também?\n 1- Sim\n 2- Não.\nDigite um número.")

        if (caminho == 1) {
            alert ("Você é muito prepotente. Game over.")
            return location.href = "/index.html"
        }
        else if (caminho == 2) {
            return location.href = "/personagem3-tiktoker/fase2.html"
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ("Já que você se considera um influencer digital, acredita ser capaz de nos influenciar também?\n 1- Sim\n 2- Não.\nDigite um número.")
        }
    }
}