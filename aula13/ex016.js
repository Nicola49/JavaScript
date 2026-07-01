var c = 1

function Contagem() {
    console.log(`Passo ${c}`)
    c++
}

do {
    Contagem()
} while (c <= 6)