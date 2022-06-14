function receber(valor1, valor2) {
    soma = valor1 + valor2
    if (valor1 == valor2) {
        console.log("Os valores são iguais primeiro valor:" + valor1 + "segundo valor " + valor2)
    } else {
        console.log("Não são iguais")
    }
    function maior(){

        if(soma > 10 || soma < 20){
            console.log("O valor1: "+valor1+ " e "+"valor 2:"+valor2)
        }
    }
}

receber(10, 30)
