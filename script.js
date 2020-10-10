function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    

    if (horas >= 5 &&  horas < 12){
        img.innerHTML='<img src="img/amanhecer.png" width="350px">'
        document.body.style.background = '#FACC49'
        msg.innerHTML = `Bom dia! Agora são ${horas}:${minutos} horas. `
        
        
    // Mensagem de Bom dia! 

    }else if (horas >= 13 && horas <= 17){
        
        img.innerHTML='<img src="img/tarde.png" width="350px">'
        document.body.style.background = '#D86A8A'
        msg.innerHTML = `Boa tarde! Agora são ${horas}:${minutos} horas. `

    // Mensagem de Boa tarde!

}else if (horas >= 18 && horas <= 23) {
        
        img.innerHTML='<img src="img/noite.png" width="350px">'
        document.body.style.background = '#27276F'
        msg.innerHTML = `Boa noite! Agora são ${horas}:${minutos} horas. `
        
    //Mensagem de Boa noite!
    
    } else {
        img.innerHTML='<img src="img/madrugada.png" width="350px">'
        document.body.style.background = '#CF2153'
        msg.innerHTML = `Boa madrugada! Agora são ${horas}:${minutos} horas. `

    }
    covid.addEventListener('click', clicar)

    function clicar(){
        var area = document.getElementById('area')
        covid.innerHTML = `<li>Lave suas mãos com frequência. Use sabão e água ou álcool em gel.</li>
        <li>Mantenha uma distância segura de pessoas que estiverem tossindo ou espirrando.</li>
        <li>Use máscara quando não for possível manter o distanciamento físico.</li>
        <li>Não toque nos olhos, no nariz ou na boca.</li>
        <li>Cubra seu nariz e boca com o braço dobrado ou um lenço ao tossir ou expirar.</li>
        <li>Fique em casa se você se sentir indisposto.</li>
        <li>Procure atendimento médico se tiver febre, tosse e dificuldade para respirar.</li>`
        covid.style.background = '#d83b26'
    }
    
}



