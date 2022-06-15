const lista =
[
    {
        name:'sabao em po',
        preco: 30,
    },
    {
        name:'cereal',
        preco:12,
    },
    {
        name: 'toalha',
        preco:30,
    },
]
const saldoDisponivel = 100;

function calcularSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index+1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    },saldoDisponivel)
}

console.log(calcularSaldo(saldoDisponivel, lista))

const games = 
[
    {
        name: 'The last us',
        valor: 130.00
    },
    {
        name: 'god Of War',
        valor:250.00,
    },
    {
        name:'Assassin´s creed',
        valor:88.50,
    },
    {
        name:'horizon zero dawn',
        valor:33.33,
    }
]

const saldoGames = 600.50

const somarGames = (saldoGames, games) => {
    return games.reduce(function(prev, current, index){
        console.log('Rodada'+ index+1)
        console.log({prev})
        console.log({current})
        return prev - current.valor
    },saldoGames)
}

console.log(somarGames(saldoGames, games))