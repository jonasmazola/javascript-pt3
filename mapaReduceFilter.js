
const numeros = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]


const companias = [
    { nome: 'sansung', valorMercado: 50, ceo: 'Jonas', fundada: 1938},
    { nome: 'lg', valorMercado: 415, ceo: 'Silva', fundada: 1975},
    { nome: 'philips', valorMercado: 117, ceo: 'Pereira', fundada: 1968},
    { nome: 'sonic', valorMercado: 383, ceo: 'Gouveia', fundada: 2004},
    { nome: 'smart', valorMercado: 30, ceo: 'Fonseca', fundada: 2006},
    { nome: 'smart', valorMercado: 845, ceo: 'Fonseca', fundada: 1976}
]

const valoresComPorcentagem = valor => {
    valor.valorMercado = valor.valorMercado + valor.valorMercado * 0.1

    return valor
}

const impresasAntigas = antigas => antigas.fundada < 2000

const valorTotalDasAntigas = (acumulador, antiga) => acumulador + antiga.valorMercado

const melhoresCompanias = companias.map(valoresComPorcentagem)
.filter(impresasAntigas)
.reduce(valorTotalDasAntigas, 0)


console.log(melhoresCompanias)







// const valorAtualizado = companias.map(valor => {
//     valor.valorMercado = (valor.valorMercado) + valor.valorMercado * 0.1
//      return valor
// }).filter(idade => {
//     return idade.fundada >= 1988
// }).reduce((acumlado, valorAtual) =>{
//     return acumlado + valorAtual.valorMercado
// },0)

// console.log(valorAtualizado)



