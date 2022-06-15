/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
[plano]:[aumento]
[A]:[10%]
[B]:[15%]
[C]:[20%]
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(opcao, salario) {
    switch (opcao) {
        case 'A':
            return salario * 1.10
        case 'B':
            return salario * 1.10
        case 'C':
            return salario * 1.20
        default:
            return "Valor invalido"
    }
}
console.log(aumento('A',1000))
console.log(aumento('B',1000))
console.log(aumento('C',1000)) 
console.log(aumento('D',1000)) 
