document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("ready");
  }
  let score = 0;
  let pickale_pow = 1;
  let miner = 1;

  const gained_ore = document.querySelector("section > p");

  const ore = document.getElementById("ore");
  ore.addEventListener("click", function() {
    score += pickale_pow;
    gained_ore.textContent = "Ore : " + String(score);
  })

  const pow_up = document.getElementById("pow_up");
  pow_up.addEventListener("click", function() {
    if(score >= 10) {
      pickale_pow += 1;
      score -= 10;
    }
    gained_ore.textContent = "Ore : " + String(score);
  })

  const add_miner = document.getElementById("add_miner");
  add_miner.addEventListener("click", function() {
    if(score >= 10) {
      miner += 1;
      score -= 10;
    }
    gained_ore.textContent = "Ore : " + String(score);
  })
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

