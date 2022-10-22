const cards = document.querySelectorAll('.memory-card');


cards.forEach(card => card.addEventListener('click',flipCard))

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(){

this.classList.toggle('flip');
}


