const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    //travar o tabuleiro quando duas cartas não forem iguais
    if(lockBoard) return;
    //tratamento duplo clique
    if(this === firstCard) return;
    //adiciona classe -- toggle tira e adiciona
    this.classList.add('flip')
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard(){
    [lockBoard, hasFlippedCard] = [false, false]
    [firstCard, secondCard] = [false, false]
}

//Immediately invoked Function - executa assim que criada
(function shuffle(){
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}) ();

cards.forEach((card) => {
    //adiciona evento de click e ativa a função flipCard, para cada carta
    card.addEventListener('click', flipCard)
});