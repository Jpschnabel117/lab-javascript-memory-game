class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    console.log(this.cards);
    let i = this.cards.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[randIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randIndex],
      ];
    }
    // let shuffledCards = [];
    // let loops = this.cards.length;
    // for (let index = 0; index < loops; index++) {
    //   let randIndex = Math.floor(Math.random() * this.cards.length);
    //   this.cards.splice(randIndex, 1);
    //   shuffledCards.push(this.cards[randIndex]);
    // }
    // this.cards = shuffledCards;
    console.log(this.cards);
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    document.querySelector("#pairs-clicked").textContent = this.pairsClicked;
    if (card1 === card2) {
      this.pairsGuessed++;
      document.querySelector("#pairs-guessed").textContent = this.pairsGuessed;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed >= 8) {
      return true;
    }
    return false;
  }
}
