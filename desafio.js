    // valorConvertido.innerHTML = Intl.NumberFormat('de-DE', {
    //     style: 'currency', currency: 'EUR'
    // }).format(valorReal / euro)

    // valorConvertido.innerHTML = Intl.NumberFormat('en-US', {
    //     style: 'currency', currency: 'USD'
    // }).format(valorReal / dolar)

const dolar = 5.9
const euro = 5
const bitcoin = 1000

const converterDinheiro = () => {
    const moedaSelecionada = document.getElementById('selecionarMoeda').value
    const valorReal = document.getElementById('valorDigitado').value
    const valorConvertido = document.getElementById('valorConvertido')
    const valorOriginal = document.getElementById('valorOriginal')


    if(moedaSelecionada === 'Dolar Americano') {
        valorConvertido.innerHTML = Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(valorReal / dolar)

    }else if(moedaSelecionada === 'Euro') {
        valorConvertido.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(valorReal / euro) 

    }else{
        valorConvertido.innerHTML = valorReal / bitcoin

    }

    
    // valor real
    valorOriginal.innerHTML = Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(valorReal)



}

// imagemMoeda" src="./img/euro.png" 
const mostrarConversao = () => {
    const moedaSelecionada = document.getElementById('selecionarMoeda').value

    if(moedaSelecionada === 'Dolar Americano') {
        moedaConvertida.innerHTML = 'Dolar Americano'
        imagemMoeda.src = "./img/usa.png" 

    }else if(moedaSelecionada === 'Euro') {
        moedaConvertida.innerHTML = 'Euro'
        imagemMoeda.src = "./img/euro.png" 

    }else{
        moedaConvertida.innerHTML = 'BitCoin'
        imagemMoeda.src = "./img/bitcoin.png"

    }
    
}

botaoConverter = document.addEventListener('click', converterDinheiro)
selecionarMoeda = document.addEventListener('change', mostrarConversao)







