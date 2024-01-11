document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    console.log("ready");
  }
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});
