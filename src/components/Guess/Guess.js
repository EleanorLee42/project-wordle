import React from 'react';
import { range } from '../../utils';
import { checkGuess } from "../../game-helpers";

function Cell ({status, letter }) {
  return (
    <span className={`cell ${status}`}>{letter}</span>
  )
}

function Guess({ word, answer }) {
  const checkedGuess = checkGuess(word, answer);
  return (
  <p className="guess">
    {range(5).map((index) => (
      <Cell key={index}
      status={word ? checkedGuess[index].status : undefined}
      letter={word ? checkedGuess[index].letter : undefined}
      />
))}
  </p>);
}

export default Guess;
