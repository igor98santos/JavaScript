//pessoa -> 123 -> {...}
const pessoa = {nome:'igor'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)
//pesoa -> 456 -> {...}
//pessoa = {nome: 'ana'}

//eu congelo o objeto ou seja não posso mais modificar 
Object.freeze(pessoa)

pessoa.nome = 'santos'
pessoa.end = 'Rua ObDc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome:'igor'})
console.log(pessoaConstante)

pessoaConstante.end = 'rio grande'
console.log(pessoaConstante)