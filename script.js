var animalLength = document.querySelectorAll(".animalcard").length;
for (i = 0; i < animalLength; i++) {
  document
    .querySelectorAll(".animalcard")
    [i].addEventListener("click", function () {
      var animalName = this.textContent;
      switch (animalName) {
        case "Lion":
          var sound = new Audio("./Sound/Lion.wav");
          sound.play();
          break;
        case "Monkey":
          var sound = new Audio("./Sound/Monkey.wav");
          sound.play();
          break;
        case "Eagle":
          var sound = new Audio("./Sound/Eagle.mp3");
          sound.play();
          break;
        case "Cat":
          var sound = new Audio("./Sound/Cat.wav");
          sound.play();
          break;
        case "Cow":
          var sound = new Audio("./Sound/Cow.wav");
          sound.play();
          break;
        case "Dog":
          var sound = new Audio("./Sound/Dog.wav");
          sound.play();
          break;
        case "Duck":
          var sound = new Audio("./Sound/Duck.mp3");
          sound.play();
          break;
        case "Elephant":
          var sound = new Audio("./Sound/Elephant.mp3");
          sound.play();
          break;
        case "Goat":
          var sound = new Audio("./Sound/Goat.mp3");
          sound.play();
          break;
        case "Horse":
          var sound = new Audio("./Sound/Horse.wav");
          sound.play();
          break;
        case "Peacock":
          var sound = new Audio("./Sound/Peacock.mp3");
          sound.play();
          break;
        case "Sheep":
          var sound = new Audio("./Sound/Sheep.mp3");
          sound.play();
          break;
        case "Whale":
          var sound = new Audio("./Sound/Whale.mp3");
          sound.play();
          break;
        case "Owl":
          var sound = new Audio("./Sound/Owl.mp3");
          sound.play();
          break;
        case "Rattle Snake":
          var sound = new Audio("./Sound/RattleSnake.mp3");
          sound.play();
          break;
        case "Wolf":
          var sound = new Audio("./Sound/Wolf.wav");
          sound.play();
          break;
        default:
          alert("Please click on animal");
          break;
      }
    });
}
