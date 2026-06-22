function carregar() {
    var msg = window.document.getElementById("msg")
    var foto = window.document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        foto.innerHTML = '<img src="manha.png" alt="Foto da manhã"></img>'
        document.body.style.background = "#ebd3a5"
    } else if (hora > 12 && hora <= 18) {
        foto.innerHTML = '<img src="tarde.png" alt="Foto da tarde"></img>'
        document.body.style.background = "#ce9237"
    } else {
        foto.innerHTML = '<img src="noite.png" alt="Foto da noite"></img>'
        document.body.style.background = "#3d4245"
    }
}
