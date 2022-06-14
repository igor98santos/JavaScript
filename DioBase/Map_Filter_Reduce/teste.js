/*Usando map */
const array = [1, 2, 3, 4, 5];
array.map((item)=> item * 2); //retorno: [2, 4, 6, 8, 10]

/*Usando forEach */
const array2 = [1, 2, 3, 4, 5];
array2.forEach((item) => item * 2) //retorno: undefined

//Filter
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((frutas) => frutas.includes('maçã'));

//reduce
const callbackFn = function(acumulador, currentValue, index, array){

}

array.reduce(callbackFn, initialValue)