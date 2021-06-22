
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome(){
  let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3 ){
     txt.innerHTML = 'Nome inválido'  
     txt.style.color = 'black'
     txt.style.background = 'rgb(233, 73, 73)'
    }
    else{
        txt.innerHTML = ''
        nomeOk = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'black'
        txtEmail.style.background = 'rgb(233, 73, 73)'
    }
    else{
        txtEmail.innerHTML = ''
        emailOk = true

    }
}


function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'black'
        txtAssunto.style.display = 'block'
        txtAssunto.style.background = 'rgb(233, 73, 73)'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')

    }
    else{
        alert('Preencha os campos obrigatórios!')
    }
}


function mapaZoom(){
    mapa.style.width = '750px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.height = '450px'
}