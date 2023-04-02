// const elementID = document.querySelector('h1')
// elementID.innerHTML = '<div style="color:red">ola</div>'


// const elementClass = document.querySelectorAll('.paragrafo')
// // console.log(elementClass)
// elementClass.forEach(elementClass => {

// })

// const elementTagName = document.getElementsByTagName('body')



// const input = document.querySelector('input')
// const button = document.querySelector('button')


// input.addEventListener('focus', () =>{
//     console.log('dei um foco')
// })



const button = document.getElementsByTagName('button')[0]
const select = document.getElementById('valorPais')

const dolar = 5.2
const euro = 5.9


const converterValor = () => {
    const valorReal = document.getElementById('valorDigitado').value
    const exibirReal = document.getElementById('exibirValorReal')
    const valorConvertido = document.getElementById('valorConvertido')

    exibirReal.innerHTML = Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(valorReal)


    if (select.value === '€ Euro') {
        valorConvertido.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(valorReal / euro)
    } else {
        valorConvertido.innerHTML = Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
        }).format(valorReal / dolar)
    }


}

const trocarValor = () => {
    const moedaLocal = document.getElementById('moedaLocal')
    const imagemLocal = document.getElementById('imagemLocal')

    if (select.value === '€ Euro') {
        moedaLocal.innerHTML = 'Euro'
        imagemLocal.src = "./img/Design sem nome 1.png"
    } else {
        moedaLocal.innerHTML = 'Dolar Americano'
        imagemLocal.src = "./img/estados-unidos (1) 1.png"
    }

    converterValor()
}

button.addEventListener('click', converterValor)
select.addEventListener('change', trocarValor)
