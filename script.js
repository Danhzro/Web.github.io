function increaseYesBtn() {
  var yesBtn = document.getElementById("yesBtn");
  yesBtn.style.fontSize = (parseInt(window.getComputedStyle(yesBtn).fontSize) + 10) + "px";
}

function showCatGif() {
  var container = document.getElementById("catGifContainer");
  container.classList.remove("hidden");
  document.querySelector('.container').innerHTML = '';
}
