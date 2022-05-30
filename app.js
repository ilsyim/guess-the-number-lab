const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      console.log(this.secretNum)
  }
}
// method = function that is attached to an object
game.getGuess = function(guess){
  while (guess >= [smallestNum] || guess <= [biggestNum]) 
  prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
}
console.log(game)


// game.play()