import React from 'react';

function GuessInput( {handleAddGuess, inputDisabled} ) {
  let [input, setInput] = React.useState('');

  function handleSubmit (event) {
    event.preventDefault();
    if (input.length !== 5) {
      window.alert('Guess must be exactly five letters!');
      return;
    }
    handleAddGuess(input);
    setInput('');
  }

  return (
  <form className="guess-input-wrapper"
  onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" 
    type="text"
    required
    value={input}
    disabled={inputDisabled}
    minLength={5}
    maxLength={5}
    onChange={(event) => {
      setInput(event.target.value.toUpperCase())
      }}></input>
  </form>
  
  );
}

export default GuessInput;
