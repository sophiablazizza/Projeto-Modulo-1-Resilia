function escolha() {

    while (true) {
       var caminho = prompt ('Que vocabulário impecável! Vamos prosseguir com uma pergunta muito importante. Você coloca ketchup na pizza?\n 1- Não\n 2- Sim\nDigite um número.')

        if (caminho == 1) {
            return location.href = "./fase3.html"
        }
        else if (caminho == 2) {
            alert ("Você é um herege da culinária. Game over.")
            return location.href = "./index.html"
        } 
        else {
            alert ('Escolha uma opção válida!')
            caminho = prompt ('Que vocabulário impecável! Vamos prosseguir com uma pergunta muito importante. Você coloca ketchup na pizza?\n 1- Não\n 2- Sim\nDigite um número.')
        }
    }
}