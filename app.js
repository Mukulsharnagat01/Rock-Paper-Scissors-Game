let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a Draw!";
  msg.style.color = "#ffa500";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.color = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
    msg.style.color = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      // rock, paper
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

document.querySelector("#reset").addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  document.querySelector("#user-score").innerText = userScore;
  document.querySelector("#comp-score").innerText = compScore;
  msg.innerText = "Play your move";
  msg.style.color = "#333";
});

