function escolha() {
    
    while (true) {
       var caminho = prompt ("Escolha sensata. Agora responda, você prefere How I Met Your Mother ou Friends?\n 1- How I Met Your Mother\n 2- Friends\nDigite um número.")

        if (caminho == 1) {
            return location.href = "/personagem3-tiktoker/fase3.html"
        }
        else if (caminho == 2) {
            alert ("Sem tempo para how you doing, irmão. Game Over.")
            return location = ("/index.html")
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ("Já que você se considera um influencer digital, acredita ser capaz de nos influenciar também?\n 1- Sim\n 2- Não.\nDigite um número.")
        }
    }
}