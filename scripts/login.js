const nome = document.querySelector(".text");
const btn = document.querySelector(".btn-enviar");
const form = document.querySelector(".form-login");

const checarNome = ({target})=>{

    
    if(target.value.length >2 ){
        btn.removeAttribute("disabled");
        return;
    }else{
        btn.setAttribute("disabled","");
    }
}

const quandoEnviar = (e)=>{
    e.preventDefault();
    localStorage.setItem("jogador",nome.value);
    window.location = "paginas/jogo.html"
}

nome.addEventListener("input",checarNome);
form.addEventListener("submit",quandoEnviar)