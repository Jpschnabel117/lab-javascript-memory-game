class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if ((this.cards = undefined)) {
      return undefined;
    }
    for (let i = this.cards.length; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[randomIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randomIndex],
      ];
    }
    console.log(this.cards);
    return this.cards;
  }
  
  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}
