document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("ready");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});

let score = 0;
let pickale_pow = 1;
let miner = 1;

const ore = document.getElementsByClassName("ore");
ore.addEventListener("click", function() {
  score += pickale_pow;
})

const pow_up = document.getElementsByClassName("pow_up");
pow_up.addEventListener("click", function() {
  if(score >= 10) {
    pickale_pow += 1;
    score -= 10;
  }
})

const add_miner = document.getElementsByClassName("add_miner");
add_miner.addEventListener("click", function() {
  if(score >= 10) {
    miner += 1;
  }
})