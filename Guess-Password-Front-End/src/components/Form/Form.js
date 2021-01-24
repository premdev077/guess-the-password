import React from 'react';
import { Input } from '@smooth-ui/core-sc';
import * as Styled from './style';

const Form = ({block, returnGuessToApp}) => {
  const onSubmit = e => {
    e.preventDefault();

    if (!block && e.target.value !== '') {
      const guess = e.target.value;
      e.target.value= ''; // Clear input field after submit
  
      returnGuessToApp(guess);
    }
  }
  
  return (
    <Styled.Form onSubmit={onSubmit}>
      <Input 
        width={1} 
        type="number" 
        textAlign="center" 
        fontSize={22} 
        minHeight={40} 
        name="guess" 
        min="0" 
        max="9" 
        placeholder="Enter your guess"
        onChange={(e) => { onSubmit(e) }}
        required
      />
    </Styled.Form>
  );
}

export default Form;