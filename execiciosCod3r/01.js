/*
01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */
function somar(a, b){
    const multi = a * b
    const sub = a - b
    const soma = a + b
    const divisão = a / b
    console.log('A multiplicação é:'+multi)
    console.log('A subtraçõa é:'+sub)
    console.log('A soma é:'+soma)
    console.log('A divisão é:'+divisão)
}
console.log(somar(2, 5))
/*Array Function */
const somar2 = (c,d) =>[ multi = c * d, sub = c - d, somar1 = c + d, diva = c / d, mod = c % d]
console.log(somar2(2,2))