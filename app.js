const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      // console.log(this.secretNum),
      do {
        this.prevGuesses.push(this.getGuess());
        this.render()
      } while (this.prevGuesses.at(-1) !== this.secretNum); 
  },
  getGuess: function(){
    let guess;
    while (
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
      ){
        guess = parseInt(
          prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        );
      }
        return guess;
    
  },
  render: function(){
    let message;
    if (this.prevGuesses.at(-1) === this.secretNum) { 
      message = `Congrats! You guessed the number in ${this.prevGuesses.length}!`} else {
        message = `Your guess is too ${this.prevGuesses.at(-1) > this.secretNum ? 'high' : 'low'}
      \nPrevious guesses: ${this.prevGuesses.join(", ")}`;
  }
  alert(message)
}
}
game.play()


// console.log(game) not needed if I put game.play() at the end 



// method = function that is attached to an object /or method is a function that is a propety of an object
// parseInt() parses a string argument & returns an integer
// Nan =  value representing Not-A-Number
//  render is simliar to return?
// step 5 needs a render(), to game.play that will have an alert() with the message `Congrats! You guessed the number in [number of prevGuesses!] or Your guess is too [high|low] Previous guesses: x, x, x, x...`
// will probably use .join() for prevGuesses
// numArrays[numArrays.length -1] is the same as numArrays.at(-1)
// length = length of the array / the number of elements in an array

// wasn't sure how to write the render part so I tried to understand it by looking at the solution. need to get more familiar with ternary operator.