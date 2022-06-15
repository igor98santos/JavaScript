function validaArray(arr, num) {
    try {

        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("ARRAY PRECISA SER DO TIPO OBJECT")

        if (typeof arr !== 'object') throw new TypeError("NUM PRECISA SER DO TIPO NUMBER")

        if (arr.length !== num) throw new RangeError('TAMANHO INVALIDO');

        return arr
    }
    catch (e) {
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError")
            console.log(e.message)
        }else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }else{
            console.log("Ocorreu um erro não esperado:"+e)
        }
    }
}
console.log(validaArray([],'A'))