document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  startMining();
});

function addClickEvent(elementId, clickHandler) {
  let element = document.getElementById(elementId);
  
  if (element && !element.hasClickEvent) {
    element.hasClickEvent = true;
    element.addEventListener('click', clickHandler);
  }
}

let score = 0;
let minerCount = 0;
let pickaxeLevel = 0; 

function mineOre() {
  let lingotsGagnes = (pickaxeLevel >= 1) ? 1 + pickaxeLevel : 1;
  score += lingotsGagnes;
  updateDisplay();
}

function buyMiner() {
  if (score >= 10) {
    score -= 10;
    minerCount += 1; 
    updateDisplay();
  } else {
    alert("Vous n'avez pas assez de lingots pour acheter un mineur.");
  }
}

function upgradePickaxe() {
  if (score >= 10) {
    score -= 10;
    pickaxeLevel += 1; 
    updateDisplay();
  } else {
    alert("Vous n'avez pas assez de lingots pour améliorer la pioche.");
  }
}

function startMining() {
  setInterval(function () {
    score += minerCount;
    updateDisplay();
  }, 1000); 
}

function updateDisplay() {
  document.getElementById('score').textContent = 'Score: ' + score;
  document.getElementById('miner-count').textContent = 'Miner Count: ' + minerCount;
  document.getElementById('pickaxe-level').textContent = 'Pioche Level: ' + pickaxeLevel;
  
}
