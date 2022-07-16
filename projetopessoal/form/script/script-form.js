alert('Atenção! O que for informado no formulário não irá para lugar algum, pos o Github Pages onde esse site esta hopesdado não aceita linguagens de servidor. Como: PHP, Python, Ruby e etc...')

var btt = document.querySelector('#btt')

function clicar() {
    alert('Muito obrigado por interagir com meu site!!!')
    location.href = './direc/directoform.html'
    
}

var dg = document.querySelector('#digit-auto')
var text = "@DEVDEIVISONJOHNNY"
var intervalo = 150

function showText(dg, text, intervalo) {
    const char = text.split("").reverse()

    const typer = setInterval(() => {
        if(!char.length) {
            return clearInterval(typer)
        }

        const next = char.pop()

        dg.innerHTML += next

    }, intervalo)
}

showText(dg, text, intervalo)
