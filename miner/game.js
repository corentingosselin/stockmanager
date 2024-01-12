document.addEventListener("DOMContentLoaded", function (event) {
  const game = new Game();
  game.start();
  //listen click of id gold-ore
  document.getElementById("gold-ore").addEventListener("click", function () {
    game.pickaxe.use(game);
  });

  const buyMinerButton = document.getElementById("buy-miner-button");
  buyMinerButton.addEventListener("click", function () {
    game.buyMiner();
  });

  const upgradePickaxeButton = document.getElementById(
    "upgrade-pickaxe-button"
  );
  upgradePickaxeButton.addEventListener("click", function () {
    game.upgradePickaxe();
  });
});

class Game {
  score = 0;
  miners = [];

  constructor() {
    this.shop = new Shop();
    this.pickaxe = new Pickaxe();
  }

  getScore() {
    return this.score;
  }

  addScore(score) {
    this.score += score;
  }

  minerPrice = 10;
  buyMiner() {
    if (this.score < this.minerPrice) {
      alert("Vous n'avez pas assez de lingots");
      return;
    }
    this.miners.push(new Miner());
    this.score -= this.minerPrice;
    this.updateScore();
  }

  pickaxePrice = 10;
  upgradePickaxe() {
    if (this.score < this.pickaxePrice) {
      alert("Vous n'avez pas assez de lingots");
      return;
    }
    this.pickaxe.upgrade();
    this.updatePickaxeLevel();
    this.score -= this.pickaxePrice;
    this.updateScore();
  }

  start() {
    setInterval(() => {
      this.miners.forEach((miner) => {
        miner.mine(this);
      });
    }, 1000);
  }

  updateScore() {
    document.getElementById("score").innerHTML = `Score: ${this.score} lingots`;
  }

  updateMinerAmount() {
    document.getElementById(
      "miner-amount"
    ).innerHTML = `Miners: ${this.miners.length}`;
  }

  updatePickaxeLevel() {
    document.getElementById(
      "pickaxe-level"
    ).innerHTML = `Pioche niveau: ${this.pickaxe.getLevel()}`;
  }
}

class Miner {
  mine(game) {
    game.addScore(1);
    game.updateScore();
  }
}

class Pickaxe {
  level = 1;
  constructor() {}

  upgrade() {
    this.level++;
  }

  getLevel() {
    return this.level;
  }

  use(game) {
    game.addScore(this.level);
    game.updateScore();
  }
}

class Player {
  constructor() {}
}

class Shop {
  constructor() {}
}
