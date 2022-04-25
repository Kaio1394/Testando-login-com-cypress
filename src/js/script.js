function validation() {
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var mensagem = document.getElementById('mensagem-span');
    if(email.value !== "" && senha.value !== ""){
        if(email.value == "kaio.santiago.13@hotmail.com" && senha.value == "1234"){
            mensagem.innerText = "Login efetuado";
        }else{
            mensagem.innerText = "Senha inválida";
        }
    }else if(email.value == ""){
        mensagem.innerText = "Email não preenchido!";
    }else if(senha.value == ""){
        mensagem.innerText = "Senha não preenchido!";
    }
}