// Get the game choices buttons and the result element
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultEl = document.querySelector('.result');

// Add click event listeners to the game choices buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Function to play the game
function playGame(userChoice) {
  // Generate a random computer choice
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the winner
  let result;
  if (userChoice === 'rock' && computerChoice === 'scissors' ||
      userChoice === 'paper' && computerChoice === 'rock' ||
      userChoice === 'scissors' && computerChoice === 'paper') {
    result = 'You Win!';
  } else if (userChoice === computerChoice) {
    result = 'Tie!';
  } else {
    result = 'Computer Wins!';
  }

  // Show the result
  resultEl.textContent = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
  resultEl.parentElement.style.display = 'block';
}


// ## Add validation

// Create a username input field and use the username the player inputs in the game so that a player can 
//see their name on the page when looking at where the scores are displayed.

//Create a div in the html with an id of "username"
//Create a text input box with id of "username-input"
//Create a button to enter the username, with an id of "username-button"
//Create an event listener for the button, to run a function of input username
//when clicked, the function should take the text content from the input box, and assign it to a username variable
//then display that username variable in the html

let usernameInput = document.querySelector(`#username-input`);
let usernameBox = document.querySelector(`#username-box`);
let usernameButton = document.querySelector(`#username-button`);
let username;

usernameButton.addEventListener("click", enterUsername);

function enterUsername(event){
  if (usernameInput.value.length < 11) {
  username=usernameInput.value;
  usernameBox.textContent=usernameInput.value;}
  else {alert("Please enter a username of 10 characters or less");}
}

// To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

// This will be deemed as complete when the users cannot enter a username longer than 10 characters.

// - 🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
// - 🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.