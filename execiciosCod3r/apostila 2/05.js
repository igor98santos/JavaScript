/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
*/

const maiorOuIgual = (valor1, valor2) => {
    if(valor1 === valor2){
        console.log(`Os valores ${valor1} e ${valor2} são iguais`)
    }else if(valor1 > valor2){
        console.log(`O valor ${valor1} é maior que ${valor2}`)
    }else if((valor2 > valor1)){
        console.log(`O valor ${valor2} é maior que ${valor1}`)
    }
}

maiorOuIgual(1,1)
maiorOuIgual(2,1)
maiorOuIgual(1,2)


const valores = (n1, n2) => n1 === n2 ? console.log(true) :console.log(false) 
valores(2,1)