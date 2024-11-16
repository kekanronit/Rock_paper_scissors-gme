let userId = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const geneCompChoices = () => {
  // rock , paper , scissors
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showWinner = (userWin, userId, compchoice) => {
  if (userWin) {
    userId++;
    userscorepara.innerText = userId;
    msg.innerText = `You Win !!your ${userId} beats ${compscore}`;
    msg.style.backgroundcolor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = ` You lost.  ${compscore} beats  your${userId}`;
    msg.style.backgroundcolor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "Game was Draw . play again";
  msg.style.backgroundcolor = "#483d8b";
};

const playGame = (userId) => {
  // Generate computer choices -- modular way of programming
  const compchoice = geneCompChoices();

  if (userId === compchoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userId === "rock") {
      // scissors , paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userId === "paper") {
      // rock , scissors
      userWin = compchoice === "scissors" ? false : true;
    } else {
      // paper , rock
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userId, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userId = choice.getAttribute("Id");
    playGame(userId);
  });
});
