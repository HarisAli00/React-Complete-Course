const GuessNumber = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    let userInput = prompt("type a number");

    if (randomNumber == userInput) {
        alert(`Congratulations you guess the right Number 😊😊😊`);
    } else {
        alert(`Computer Number: ${randomNumber}, Your guess: ${userInput}`);
    }
}

export default GuessNumber;