const cards = document.querySelectorAll('.card');

function flipCard() {
    //adiciona e tira
    this.classList.toggle('flip')
}

cards.forEach((card) => {
    //adiciona evento de click e ativa a função flipCard, para cada carta
    card.addEventListener('click', flipCard)
});