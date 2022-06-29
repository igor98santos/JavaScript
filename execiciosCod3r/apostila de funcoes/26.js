/* 
26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

    const valor = 100
    for(let i = 0; i < valor; i++){
       const par = valor % 2
        if(par === 0){
            console.log((i+1)+" é par")
        }else if(par != 0){
            console.log((i+1)+" é impar")
        }
    }