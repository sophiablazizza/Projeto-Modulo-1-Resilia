function escolha() {
    
    while (true) {
       var caminho = prompt ('NÃO FOI SÓ UMA FASE, MÃE! Aparentemente os tempos mudaram, mas você continuou preso no ano de 2008. Escolha uma das bandas a seguir e descubra seu futuro:\n 1- Fresno\n 2- My Chemical Romance \nDigite um número.')

        if (caminho == 1) {
            return location.href = "./fase2.html"
        }
        else if (caminho == 2) {
            return location.href = "./fase2mcr.html"
        } 
        else {
            alert ('Digite uma opção válida!')
            caminho = prompt ('NÃO FOI SÓ UMA FASE, MÃE! Aparentemente os tempos mudaram, mas você continuou preso no ano de 2008. Escolha uma das bandas a seguir e descubra seu futuro:\n 1- Fresno\n 2- My Chemical Romance \nDigite um número.')
        }
    }
}
