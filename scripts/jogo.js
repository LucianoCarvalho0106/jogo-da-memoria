const grid = document.querySelector(".grid");
const cartas = document.querySelector(".carta");
let primeiraCarta  = '';
let segundaCarta = '';

const personagens = [
    'ace',
    'doflamingo',
    'law',
    'luffy',
    'robin',
    'roger',
    'sanji',
    'ussop',
    'zoro',
    'nami'
];

const criarElemento = (tag,classe)=>{
    let card = document.createElement(tag);
    card.className = classe;
    return card;
}

const checarFimDeJogo = ()=>{
  const cartasDesabilitadas = document.querySelectorAll(".desabilitar-carta");
  if(cartasDesabilitadas.length == 20){
    setTimeout(()=>{
      alert("Fim de Jogo")
    },100)
    
  }
}

const checarCarta = ()=>{
  const primeiroPersonagem = primeiraCarta.getAttribute("data-personagens");
  const segundoPersonagem = segundaCarta.getAttribute("data-personagens");

  if(primeiroPersonagem === segundoPersonagem){
    
    primeiraCarta.firstChild.classList.add("desabilitar-carta");
    segundaCarta.firstChild.classList.add("desabilitar-carta");
    
    primeiraCarta = '';
    segundaCarta = '';

    checarFimDeJogo();

  }else{
    setTimeout(()=>{
      primeiraCarta.classList.remove('revelar-carta');
      segundaCarta.classList.remove('revelar-carta');
      
    primeiraCarta = '';
    segundaCarta = '';

    },500)
  }
}

const revelarCarta = ({ target }) => {

    if (target.parentNode.className.includes('revelar-carta')) {
      return;
    }
  
    if (primeiraCarta === '') {
  
      target.parentNode.classList.add('revelar-carta');
      primeiraCarta = target.parentNode;
  
    } else if (segundaCarta === '') {
  
      target.parentNode.classList.add('revelar-carta');
      segundaCarta = target.parentNode;
  
      checarCarta();
    }  

   
  }

const criarCarta = (personagens)=>{

    let carta = criarElemento('div','carta');
    let frente = criarElemento('div','rosto frente');
    let costa = criarElemento('div','rosto costa');

    carta.appendChild(frente);
    carta.appendChild(costa);

    frente.style.backgroundImage = `url('../images/${personagens}.jpg')`;

    carta.addEventListener('click', revelarCarta);
    carta.setAttribute('data-personagens', personagens)

    return carta;
}


const criarTodasAsCartas = ()=>{
    const duplicarPersonagens = [...personagens, ...personagens];
    const embaralhar = duplicarPersonagens.sort(()=> Math.random() - 0.5)
    embaralhar.forEach((personagens)=>{
        const carta = criarCarta(personagens);
        grid.appendChild(carta);
       
    })
}


  
  window.onload = ()=>{
    criarTodasAsCartas();
  }