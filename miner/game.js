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
  let pickaxeLevel = 10;
  let minekart = 0;
  let mineshaft = 0;
  let world = 0;

  let pickaxecost=500;
  let minercost=150;
  let minekartcost=1100;
  let mineshaftcost=12000;
  let worldcost=1300000;
  

  // interaction avec le fichier html
  const ingotsDisplay = document.querySelector(".ingots ");
  const minerdisplay = document.querySelector(".minerdisplay ");
  const picaxelevel = document.querySelector(".picaxelevel ");
  const minekartlevel = document.querySelector(".minekartlevel ");
  const mineshaftlevel = document.querySelector(".mineshaftlevel ");
  const worldlevel = document.querySelector(".worldlevel ");

  const mineWindow = document.getElementById("minewindows");

  const shopMiner = document.querySelector("#shop .miner");
  const shopPicaxe = document.querySelector("#shop .picaxe");
  const shopMinekart = document.querySelector("#shop .minekart");
  const shopMineshaft = document.querySelector("#shop .mineshaft");
  const shopworld = document.querySelector("#shop .world");

  const pickaxecostdisplay = document.querySelector(".pickaxecost ");
  const minercostdisplay = document.querySelector(".minercost ");
  const minekartcostdisplay = document.querySelector(".minekartcost ");
  const mineshaftcostdisplay = document.querySelector(".mineshaftcost ");
  const worldcostdisplay = document.querySelector(".worldcost ");

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

  function updateworldlevel() {
    worldlevel.textContent = world;
  }



  function updateMinercost() {
    minercostdisplay.textContent = minercost;
  }

  function updatepicaxecost() {
    pickaxecostdisplay.textContent = pickaxecost;
  }

  function updateminekartcost() {
    minekartcostdisplay.textContent = minekartcost;
  }

  function updatemineshaftcost() {
    mineshaftcostdisplay.textContent = mineshaftcost;
  }

  function updateworldcost() {
    worldcostdisplay.textContent = worldcost;
  }



  mineWindow.addEventListener("click", function() {

    gold +=pickaxeLevel;


    updateGoldDisplay();
    updateMinerDisplay();
    updatepicaxelevel();
    updateminekartlevel();
    updatemineshaftlevel();
    updatepicaxecost();
    updateMinercost();
    updateminekartcost();
    updatemineshaftcost();
    updateworldcost();
    updateworldlevel();

  });


  shopMiner.addEventListener("click", function() {

    if (gold >= minercost) {

      gold -= minercost;
      minercost += 30;
      
      miners++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
      updatepicaxecost();
      updateMinercost();
      updateminekartcost();
      updatemineshaftcost();
      updateworldcost();
      updateworldlevel();
    }
  });

  
  shopPicaxe.addEventListener("click", function() {
  
    if (gold >= pickaxecost) {

      gold -= pickaxecost;
      pickaxecost *= 10;
      
      pickaxeLevel *=2;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
      updatepicaxecost();
      updateMinercost();
      updateminekartcost();
      updatemineshaftcost();
      updateworldcost();
      updateworldlevel();
    }
  });

  
  shopMinekart.addEventListener("click", function() {
    
    if (gold >= minekartcost) {

      gold -= minekartcost;
      minekartcost += 150 ;
      
      minekart++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
      updatepicaxecost();
      updateMinercost();
      updateminekartcost();
      updatemineshaftcost();
      updateworldcost();
      updateworldlevel();
    }
  });

  
  shopMineshaft.addEventListener("click", function() {
    
    if (gold >= mineshaftcost) {
      
      gold -= mineshaftcost;
      mineshaftcost += 1650 ;
      
      
      mineshaft++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
      updatepicaxecost();
      updateMinercost();
      updateminekartcost();
      updatemineshaftcost();
      updateworldcost();
      updateworldlevel();
    }
  });


  shopworld.addEventListener("click", function() {
    
    if (gold >= worldcost) {
      
      gold -= worldcost;
      worldcost += 18000 ;
      
      
      world++;

      updateGoldDisplay();
      updateMinerDisplay();
      updatepicaxelevel();
      updateminekartlevel();
      updatemineshaftlevel();
      updatepicaxecost();
      updateMinercost();
      updateminekartcost();
      updatemineshaftcost();
      updateworldcost();
      updateworldlevel();
    }
  });

  // fonction pour actualiser toutes les secondes
  setInterval(function() {
    gold += miners;
    miners += minekart;
    minekart += mineshaft;
    mineshaft += world;

    updateGoldDisplay();
    updateMinerDisplay();
    updatepicaxelevel();
    updateminekartlevel();
    updatemineshaftlevel();
    updatepicaxecost();
    updateMinercost();
    updateminekartcost();
    updatemineshaftcost();
    updateworldcost();
    updateworldlevel();
  }, 100);
});