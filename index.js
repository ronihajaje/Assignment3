const backgroundMusic = new Audio("sounds/jungle.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

window.addEventListener("load", () => {
  backgroundMusic.play().catch(() => {
  // This element makes sure the background music starts automatically - 
  // if the browser blocks the sound (because there was no user click),the code waits for the first click or key press to start the music.
    const startMusic = () => {
      backgroundMusic.play();
      document.removeEventListener("click", startMusic);
      document.removeEventListener("keydown", startMusic);
    };
    document.addEventListener("click", startMusic);
    document.addEventListener("keydown", startMusic);
  });
});

let currentAnimalAudio = null;
const buttons = document.querySelectorAll(".animals button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const key = this.textContent.toLowerCase();
    makeSound(key);
    animateButton(key);
  });
}

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  makeSound(key);
  animateButton(key);
});

function makeSound(key) {
  if (!backgroundMusic.paused) {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  }

  if (currentAnimalAudio && !currentAnimalAudio.paused) {
    currentAnimalAudio.pause();
    currentAnimalAudio.currentTime = 0;
  }

  switch (key) {
    case "b":
      currentAnimalAudio = new Audio("sounds/bird.mp3");
      break;
    case "c":
      currentAnimalAudio = new Audio("sounds/cat.mp3");
      break;
    case "d":
      currentAnimalAudio = new Audio("sounds/dog.mp3");
      break;
    case "f":
      currentAnimalAudio = new Audio("sounds/frog.mp3");
      break;
    case "h":
      currentAnimalAudio = new Audio("sounds/horse.mp3");
      break;
    case "r":
      currentAnimalAudio = new Audio("sounds/rooster.mp3");
      break;
    case "s":
      currentAnimalAudio = new Audio("sounds/sheep.mp3");
      break;
    default:
      return;
  }
  currentAnimalAudio.play();
}

function animateButton(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("playing");
    setTimeout(() => {
      activeButton.classList.remove("playing");
    }, 100);
  }
}
