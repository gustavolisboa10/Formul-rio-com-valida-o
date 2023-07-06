//DOM Manipulation
const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const erroMessages = document.querySelectorAll(".erro-message")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    resetError()
    validateInputs() // invocação da função
    
})

function setError(input, errorMessage){ // vai em cada imput e add mensagem de erro
    const errorMenssageElement = input.nextElementSibling // seleciona o elemento irmão
    errorMenssageElement.textContent = errorMessage // conteudo de texto vai ser igual a mensagem de erro que foi enviada como parametro na função
    input.parentElement.classList.add("error") // classe error é add dinamicamente (na DIV form control)
}

function resetError(){
    erroMessages.forEach((msg) =>{
    msg.textContent = ""
})
     nome.parentElement.classList.remove('error')
     email.parentElement.classList.remove('error')
     assunto.parentElement.classList.remove('error')
     mensagem.parentElement.classList.remove('error')
}

function validateInputs(){
    const nomeValue = nome.value.trim()  // metodo trim é para não vim espaço em branco do input
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()
    if(nomeValue === ''){
        setError(nome, 'nome não pode ficar em branco')
    }
    if(emailValue === ''){
        setError(email, 'e-mail não pode ficar em branco')
    }else if(!isValidEmail(emailValue)){
        setError(email,"e-mail inválido")
    }
    if(assuntoValue === ''){
        setError(assunto, 'assunto não pode ficar em branco')
    }
    if(mensagemValue === ''){
        setError(mensagem, 'mensagem não pode ficar em branco')
    }

}

function isValidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)  // regex para validação do e-mail
}
