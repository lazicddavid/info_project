const player = {
  name: "David",
  score: 0,
  energy: 100,

  play() {

    this.score += 10,
    this.energy -=5,
  },

  rest() {
    this.energy +=20,

  },

  getScore() {
    console.log(this.score);
  }
};


player.play();
player.play();
player.rest();

console.log(player.getScore());
console.log(player.energy);