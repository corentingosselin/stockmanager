document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("ready");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

document.addEventListener("DOMContentLoaded", function() {

  let gold = 0;
  let miners = 0;
  let pickaxeLevel = 1;
  let minekart = 0;
  let mineshaft = 0;

  // interaction avec le fichier html
  const ingotsDisplay = document.querySelector(".ingots ");
  const minerdisplay = document.querySelector(".minerdisplay ");
  const picaxelevel = document.querySelector(".picaxelevel ");
  const minekartlevel = document.querySelector(".minekartlevel ");
  const mineshaftlevel = document.querySelector(".mineshaftlevel ");
  const mineWindow = document.getElementById("minewindows");
  const shopMiner = document.querySelector("#shop .miner");
  const shopPicaxe = document.querySelector("#shop .picaxe");
  const shopMinekart = document.querySelector("#shop .minekart");
  const shopMineshaft = document.querySelector("#shop .mineshaft");

  // fonctions pour mettre à jour l'affichage
  function updateGoldDisplay() {
    ingotsDisplay.textContent = gold;
  }

  function updateMinerDisplay() {
    minerdisplay.textContent = miners;
  }

  function updatepicaxelevel() {
    picaxelevel.textContent = pickaxeLevel;
  }

  function updateminekartlevel() {
    minekartlevel.textContent = minekart;
  }

  function updatemineshaftlevel() {
    mineshaftlevel.textContent = mineshaft;
  }


  mineWindow.addEventListener("click", function() {

    gold += pickaxeLevel;


    updateGoldDisplay();
    updateMinerDisplay();
    updatepicaxelevel();
    updateminekartlevel();
    updatemineshaftlevel();
  });


  shopMiner.addEventListener("click", function() {

    if (gold >= 1000) {

      gold -= 1000;
      
      miners++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
    }
  });

  
  shopPicaxe.addEventListener("click", function() {
  
    if (gold >= 100) {

      gold -= 100;
      
      pickaxeLevel++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
    }
  });

  
  shopMinekart.addEventListener("click", function() {
    
    if (gold >= 10000) {

      gold -= 10000;
      
      minekart++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
    }
  });

  
  shopMineshaft.addEventListener("click", function() {
    
    if (gold >= 1000000) {
      
      gold -= 1000000;
      
      
      mineshaft++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
    }
  });

  // fonction pour actualiser toutes les demis secondes
  setInterval(function() {
    gold += miners;
    miners += minekart;
    minekart += mineshaft;

    updateGoldDisplay();
    updateMinerDisplay();
    updatepicaxelevel();
    updateminekartlevel();
    updatemineshaftlevel();
  }, 500);
});