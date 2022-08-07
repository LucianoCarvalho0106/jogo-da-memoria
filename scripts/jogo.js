const grid = document.querySelector(".grid");
const cartas = document.querySelector(".carta");
let primeiraCarta  = '';
let segundaCarta = '';

const personagens = [
    'ace.jpg',
    'doflamingo.jpg',
    'law.jpg',
    'luffy.jpg',
    'robin.jpg',
    'roger.jpg',
    'sanji.jpg',
    'ussop.jpg',
    'zoro.jpg',
    'nami.jpg'
];

const criarElemento = (tag,classe)=>{
    let card = document.createElement(tag);
    card.className = classe;
    return card;
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
    criarTodasAsCartas()
  }