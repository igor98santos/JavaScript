function somar(a, b){
    return a + b
}
console.log(somar(5,5))


const soma = function (a, b){
    return a / b
}
console.log(soma(5,5))



const notas = [7.7, 10, 8.8, 6.5, 9.9, 5.4, 7.4]
let notasBaixas = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)
