function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (minutos < 10) {
        minutos = `0${minutos}`; // Adiciona o zero apenas se for menor que 10
    }    
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#d5c493'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#ba836e'
    } else {
        // Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#132122'
    }
}