import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  let [guesses, setGuesses] = React.useState([]);
  let [gameOver, setGameOver] = React.useState(false);

  function handleAddGuess(newGuess) {
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses);

    if (newGuess === answer || nextGuesses.length === NUM_OF_GUESSES_ALLOWED) { setGameOver(true); }
  }

  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer}/>
      <GuessInput handleAddGuess={handleAddGuess} inputDisabled={gameOver}/>
      {(guesses.includes(answer)) && <HappyBanner numGuesses={guesses.length} />}
      {(gameOver && !(guesses.includes(answer))) && <SadBanner answer={answer}/>}
    </>
  );
}

export default Game;
