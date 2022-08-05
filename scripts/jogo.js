const grid = document.querySelector(".grid");

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

const criarCarta = (personagens)=>{

    let carta = criarElemento('div','carta');
    let frente = criarElemento('div','rosto frente');
    let costa = criarElemento('div','rosto costa');

    carta.appendChild(frente);
    carta.appendChild(costa);

    frente.style.bacgroundImage = `url('../images/${personagens}.png')`;
    grid.appendChild(carta);
    return carta;
}


const criarTodasAsCartas = ()=>{
    const duplicarPersonagens = [...personagens, ...personagens];
    const embaralhar = duplicarPersonagens.sort(()=> Math.random() - 0.5)
    embaralhar.forEach(()=>{
        criarCarta(personagens);
    })
}
criarTodasAsCartas();