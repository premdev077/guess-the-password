import React from 'react';
import { Typography } from '@smooth-ui/core-sc';
import * as Styled from './style';

const Progress = ({attempt, guessList}) => (
  <Styled.Progress>
    <Typography variant="h2" textAlign="center" >
      Guess #{attempt + 1}
    </Typography>
    <Styled.History>
      {guessList}
    </Styled.History>
  </Styled.Progress>
);

export default Progress;