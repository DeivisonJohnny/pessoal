// var btt = document.querySelector('#botao')
// var sp = document.getElementsByTagName('span') [0]


// function clicou() {
//     btt.style.background = 'red'
//     sp.innerHTML = 'Botão ilustrativo'
// }

// Botão vai ficar vermelho e mostrar msg botão ilustrativo


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
