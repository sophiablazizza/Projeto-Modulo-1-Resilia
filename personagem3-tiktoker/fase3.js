function escolha() {
    
    while (true) {
       var caminho = prompt ("Haaaaaaave you met Ted? Perfeito, você está indo bem! Agora um grande questionamento, Toddy ou Nescau?\n 1- Toddy\n 2- Nescau\nDigite um número.")

        if (caminho == 1) {
            alert ("3 colheradas pro leite ainda continuar branco? Isso é um absurdo! Game Over.")
            return location = ("/index.html")
        }
        else if (caminho == 2) {
            return location = ("../personagem3-tiktoker/fase4.html")
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ("Haaaaaaave you met Ted? Perfeito, você está indo bem! Agora um grande questionamento, Toddy ou Nescau?\n 1- Toddy\n 2- Nescau\nDigite um número.")
        }
    }
}