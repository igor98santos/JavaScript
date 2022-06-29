/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
const valorImpar = []
const valorPar = []
const meuVetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const vetorInt = () => {
    for (let i = 0; i < meuVetor.length; i++) {
        if (meuVetor[i] % 2 === 0) {
            console.log('esse valor é par:' + meuVetor[i])
            valorPar.push(meuVetor[i])
        } else {
            console.log('esse valor não é impar:' + meuVetor[i])
            valorImpar.push(1+meuVetor[i+1])
        }
    }
    console.log("De dez valores são os impares:"+valorImpar.length+" os valores são: "+valorImpar)
    console.log("De dez valores são os pares:"+valorPar.length+"os valores são:"+valorPar)
}
vetorInt()