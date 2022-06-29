const test = {
  nome: 'Javas',
  menbros: ['Lampas', 'Pectros', 'nairob', 'passadina', 'Sheldon'],

}

console.log(test)

const equipe = {
  nome: 'Guerreiros	Z',
  membros: ['Goku', 'Kuririn', 'Vegeta'],
  membrosDaEquipe() {
    this.membros.forEach(membro => {
      console.log(`${membro}	é	da	equipe	${this.nome}`);
    })
  }
}
console.log(equipe.membrosDaEquipe)

function soma(){
console.log(arguments)
}

soma('igor'+ 1+'pedro',)