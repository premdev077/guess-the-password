export const getInitialState = () => ({
  guess: undefined,
  allGuesses: [],
  attemptGuess: [],
  attempt: 0,
  numbers: 0,
  feedbackMessage: 'Enter 8 digit unique password between 0 to 9',
  block: false,
  hint:'',
});