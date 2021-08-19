function escolha () {

    while (true) {
        var caminho = prompt('A maior banda emo de todos os tempos, ótima escolha! Entretanto, have you heard the news that you are dead? Como se sente em relação a isso?\n 1- Eu ainda tinha muito para viver, nunca vou me conformar!\n 2- Estou tranquilo, fatalidades acontencem o tempo todo.\n Digite um número.')

        if (caminho == 1) {
            alert ("Não precisamos de almas revoltadas! GAME OVER.")
            return location.href = "../index.html"
        }
        else if (caminho == 2) {
            return location.href = "./fase3mcr.html"
        }
        else {
            alert ("Digite uma opção válida!")
            caminho = prompt('A maior banda emo de todos os tempos, ótima escolha! Entretanto, have you heard the news that you are dead? Como se sente em relação a isso?\n 1- Eu ainda tinha muito para viver, nunca vou me conformar!\n 2- Estou tranquilo, fatalidades acontencem o tempo todo.\n Digite um número.')
        }
    }
}
