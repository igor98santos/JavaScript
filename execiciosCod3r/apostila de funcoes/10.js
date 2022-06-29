/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function valor(number){
    if(number % 3 === 0 ){
        console.log(number+' É divisivel por três')
    }else{
        console.log(number+' não é divisivel por três')
    }
    return  
}

const valor = (number) =>{
   return number % 3 === 0 ? number +" é divisivel por 3" : number + " Não é divisivel por 3"
}
console.log(valor(10))
console.log(valor(4))
console.log(valor(81))
console.log(valor(5))
console.log(valor(9))
console.log(valor(19))