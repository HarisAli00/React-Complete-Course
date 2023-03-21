import GuessNumber from "./components/GuessNumber";
import ModeToggler from "./components/ModeToggler";

function App() {
  
  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={GuessNumber}>Guess the number between 1 and 3.</button>
    </div>
  );
}

export default App;
