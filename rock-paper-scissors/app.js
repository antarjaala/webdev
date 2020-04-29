let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score")
const computerScore_span=document.getElementById("computer-score")
const scoreBoard_div=document.querySelector(".score-board")
const result_p=document.querySelector(".result > p")
const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissor_div=document.getElementById("s")

function getComputerChoice(){
  choices=['r','p','s']
  randomNumber=Math.floor((Math.random()*3))
  return choices[randomNumber]
}


function convertToWord(letter){
  if (letter==="r") return "Rock";
  if (letter==="p") return "Paper";
  if (letter==="s") return "Scissor";
}

function win(userChoice,computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = ("user").fontsize(3).sub();
  const smallCompWord = ("comp").fontsize(3).sub();
  const userChoice_div=document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} Sannidhi Wins!!`
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(userChoice,computerChoice){
  const smallUserWord = ("user").fontsize(3).sub();
  const smallCompWord = ("comp").fontsize(3).sub();
  const userChoice_div=document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} Beats ${convertToWord(userChoice)}${smallUserWord} Sannidhi Lose!!`
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}

function draw(userChoice,computerChoice){
  const smallUserWord = ("user").fontsize(3).sub();
  const smallCompWord = ("comp").fontsize(3).sub();
  const userChoice_div=document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} same as ${convertToWord(computerChoice)}${smallCompWord} It's Drawww!!`
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'),300);
}

<<<<<<< HEAD

=======
>>>>>>> 3b2b10c9df8df42803290b978057cd71fc8b8229
function game(userChoice){
  const computerChoice=getComputerChoice()
  switch (userChoice+computerChoice){
    case ("rs"):
    case ("sp"):
    case ("pr"):
      win(userChoice,computerChoice);
      break;
    case ("rp"):
    case ("ps"):
    case ("sr"):
      lose(userChoice,computerChoice);
      break;
    case ("rr"):
    case ("pp"):
    case ("ss"):
      draw(userChoice,computerChoice);
      break;
  }
}

function main(){
  rock_div.addEventListener('click',() => game('r'));
  paper_div.addEventListener('click',() => game('p'));
  scissor_div.addEventListener('click',()=> game('s'));
  }

main()
