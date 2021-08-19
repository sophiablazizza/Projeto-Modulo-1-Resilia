function escolha() {

        var caminho = prompt("Valorizar o cenário da música nacional é admirável! Então... VAMOS FALAR DE SOLIDÃO. Quando você se sente sozinho, o que te ajuda a melhorar?\n 1- Desabafar com alguém\n 2- Descontar a raiva em alguma coisa\n Digite um número.")

        while (caminho != '1' && caminho != '2') {
                alert("Digite uma opção válida!")
                caminho = prompt("Valorizar o cenário da música nacional é admirável! Então... VAMOS FALAR DE SOLIDÃO. Quando você se sente sozinho, o que te ajuda a melhorar?\n 1- Desabafar com alguém.\n 2- Descontar a raiva em alguma coisa.\n Digite um número.")

        }
        if (caminho == '1') {
                return location.href = "./fase3.html"
        }
        else {
                alert("Saber como controlar a raiva é uma das virtudes que buscamos. Você não serve! Game Over.")
                return location.href = "./index.html"
        }

}
