function playAudio(audio) {
  var audio = new Audio("./sounds/" + audio + ".mp3");
  audio.play();
}

function keypress(key) {
  if (key === "w") {
    playAudio("tom-1");
  } else if (key === "a") {
    playAudio("tom-2");
  } else if (key === "s") {
    playAudio("tom-3");
  } else if (key === "d") {
    playAudio("tom-4");
  } else if (key === "j") {
    playAudio("snare");
  } else if (key === "k") {
    playAudio("crash");
  } else if (key === "l") {
    playAudio("kick-bass");
  }
}

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    keypress(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  keypress(event.key);
  buttonAnimation(event.key);
});
